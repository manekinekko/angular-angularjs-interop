var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
/**
 * Upgraded components are Angular directives, instead of components,
 * because Angular is unaware that AngularJS will create elements under it.
 * As far as Angular knows, the upgraded component is just a directive - a tag -
 * and Angular doesn't have to concern itself with it's children.
 */
var DatePickerDirective = (function (_super) {
    __extends(DatePickerDirective, _super);
    // @Input('ng1Data') ng1Data: any;
    // @Output('ng1Event') ng1Event: EventEmitter<any>;
    function DatePickerDirective(elementRef, injector) {
        // AngularJs component "ng1Home" must exist!
        return _super.call(this, 'ng1-date-picker', elementRef, injector) || this;
    }
    // implement all these life cycles for AOT
    DatePickerDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    DatePickerDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    DatePickerDirective.prototype.ngDoCheck = function () { _super.prototype.ngDoCheck.call(this); };
    DatePickerDirective.prototype.ngOnDestroy = function () { _super.prototype.ngOnDestroy.call(this); };
    return DatePickerDirective;
}(UpgradeComponent));
export { DatePickerDirective };
DatePickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng1-date-picker'
            },] },
];
/** @nocollapse */
DatePickerDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Injector, },
]; };
//# sourceMappingURL=date-picker.directive.js.map