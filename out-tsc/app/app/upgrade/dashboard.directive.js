var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, ElementRef, Injector, Input, Output } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
/**
 * Upgraded components are Angular directives, instead of components,
 * because Angular is unaware that AngularJS will create elements under it.
 * As far as Angular knows, the upgraded component is just a directive - a tag -
 * and Angular doesn't have to concern itself with it's children.
 */
var DashboardDirective = (function (_super) {
    __extends(DashboardDirective, _super);
    function DashboardDirective(elementRef, injector) {
        // AngularJs component "ng1Home" must exist!
        return _super.call(this, 'ng1-dashboard', elementRef, injector) || this;
    }
    // implement all these life cycles for AOT
    DashboardDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    DashboardDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    DashboardDirective.prototype.ngDoCheck = function () { _super.prototype.ngDoCheck.call(this); };
    DashboardDirective.prototype.ngOnDestroy = function () { _super.prototype.ngOnDestroy.call(this); };
    return DashboardDirective;
}(UpgradeComponent));
export { DashboardDirective };
DashboardDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng1-dashboard'
            },] },
];
/** @nocollapse */
DashboardDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Injector, },
]; };
DashboardDirective.propDecorators = {
    'ng1Data': [{ type: Input, args: ['ng1Data',] },],
    'ng1Event': [{ type: Output, args: ['ng1Event',] },],
};
//# sourceMappingURL=dashboard.directive.js.map