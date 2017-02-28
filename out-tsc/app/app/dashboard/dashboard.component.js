import { Component } from '@angular/core';
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.ng2Data = {
            name: 'Angular',
            date: new Date(),
            random: 0
        };
        this.ng1Data = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.sendRandomNg1Data = function () {
        this.ng2Data = {
            name: 'Angular',
            date: new Date(),
            random: Math.random()
        };
    };
    DashboardComponent.prototype.ng2Fire = function (data) {
        this.ng1Data = data;
    };
    return DashboardComponent;
}());
export { DashboardComponent };
DashboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            },] },
];
/** @nocollapse */
DashboardComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=dashboard.component.js.map