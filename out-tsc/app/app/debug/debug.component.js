import { Component } from '@angular/core';
var DebugComponent = (function () {
    function DebugComponent() {
        this.t = 'Show';
        this.w = window;
        this.d = [];
        this.colors = {
            'ng2': 'rgba(243, 49, 112, 0.5)',
            'ng1': 'rgba(43, 195, 236, 0.5)',
            'ng-tansclude': 'rgba(246, 181, 0, 0.5)'
        };
    }
    DebugComponent.prototype.ngOnInit = function () {
    };
    DebugComponent.prototype.toggle = function () {
        if (this.t === 'Show') {
            this.t = 'Hide';
            this.showContext();
        }
        else {
            this.t = 'Show';
            this.hideContext();
        }
    };
    DebugComponent.prototype.hideContext = function () {
        this.d.map(function (d) {
            if (d.tagName !== 'APP-DEBUG' && d.tagName !== 'APP-ROOT') {
                d.classList.remove('__debug');
                if (d.tagName !== 'APP-ROOT' || d.tagName.startsWith('APP-')) {
                    d.style.backgroundColor = '';
                    d.style.borderColor = '';
                }
            }
        });
    };
    DebugComponent.prototype.showContext = function () {
        var _this = this;
        this.d = [];
        this.loop(this.w.document.body, this.d);
        this.d.map(function (d) {
            // if (d.tagName !== 'APP-DEBUG' && d.tagName !== 'APP-ROOT') {
            d.classList.add('__debug');
            if (d.tagName === 'NG-TRANSCLUDE') {
                d.style.backgroundColor = _this.colors['ng-transclude'];
                d.style.borderColor = _this.colors['ng-transclude'];
            }
            else if (d.tagName.startsWith('APP-')) {
                d.style.backgroundColor = _this.colors['ng2'];
                d.style.borderColor = _this.colors['ng2'];
            }
            else if (d.tagName.startsWith('NG1-')) {
                d.style.backgroundColor = _this.colors['ng1'];
                d.style.borderColor = _this.colors['ng1'];
            }
            // }
        });
    };
    DebugComponent.prototype.loop = function (node, els) {
        if (els === void 0) { els = []; }
        if (node.nodeType == 1) {
            els.concat(this.visit(node, els));
            node = node.firstChild;
            while (node) {
                this.loop(node, els);
                node = node.nextSibling;
            }
        }
    };
    DebugComponent.prototype.visit = function (node, els) {
        if (els === void 0) { els = []; }
        var c = node.children;
        for (var i = 0; i < c.length; i++) {
            var childElement = c[i];
            var t = childElement.tagName;
            if (t.startsWith('APP-') || t.startsWith('NG1-') || t === 'NG-TRANSCLUDE') {
                els.push(childElement);
            }
        }
    };
    return DebugComponent;
}());
export { DebugComponent };
DebugComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-debug',
                templateUrl: './debug.component.html',
                styleUrls: ['./debug.component.css']
            },] },
];
/** @nocollapse */
DebugComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=debug.component.js.map