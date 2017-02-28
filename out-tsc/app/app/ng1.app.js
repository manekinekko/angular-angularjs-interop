import * as angular from 'angular';
import 'angular-route';
var DashboardController = (function () {
    function DashboardController(service) {
        this.ng1Data = {};
        this.ng1Data.foo = service.foo();
    }
    DashboardController.prototype.ng1Event = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    DashboardController.prototype.fire = function () {
        this.ng1Event({ data: this.ng1Data, ng1: true, transclude: true });
    };
    return DashboardController;
}());
DashboardController.$inject = ['Ng1Service'];
var DatePickerController = (function () {
    function DatePickerController() {
        this.myDate = new Date();
        this.isOpen = false;
    }
    return DatePickerController;
}());
DatePickerController.$inject = [];
var yoloApp = angular.module('yolo-app', ['ngMaterial', 'ngMessages'])
    .controller('DashboardController', DashboardController)
    .service('Ng1Service', (function () {
    function Ng1Service() {
    }
    Ng1Service.prototype.foo = function () {
        return { message: 'from AngularJs' };
    };
    return Ng1Service;
}()))
    .component('ng1-dashboard', {
    bindings: {
        ng1Data: '<',
        ng1Event: '&'
    },
    transclude: {
        'date': '?ng1-date-picker',
        'text': '?text-slot'
    },
    template: "\n    <ng-transclude ng-transclude-slot=\"date-picker\">[ng-transclude-slot=\"date\"]</ng-transclude>\n    <button ng-click=\"$ctrl.fire()\">fire \uD83C\uDF36</button>\n    <b>Input (from Angular):</b> {{ $ctrl.ng1Data | json }}\n    <ng-transclude ng-transclude-slot=\"text\">[ng-transclude-slot=\"text\"]</ng-transclude>\n    <ng-transclude></ng-transclude>\n    ",
    controller: DashboardController
})
    .component('ng1-date-picker', {
    controller: DatePickerController,
    template: "\n<md-content layout-padding ng-cloak>\n  <div layout-gt-xs=\"row\">\n    <div flex-gt-xs>\n      <h4>Standard date-picker</h4>\n      <md-datepicker ng-model=\"$ctrl.myDate\" md-placeholder=\"Enter date\"></md-datepicker>\n    </div>\n\n    <div flex-gt-xs>\n      <h4>Disabled date-picker</h4>\n      <md-datepicker ng-model=\"$ctrl.myDate\" md-placeholder=\"Enter date\" disabled></md-datepicker>\n    </div>\n  </div>\n\n  <div layout-gt-xs=\"row\">\n    <div flex-gt-xs>\n      <h4>Opening the calendar when the input is focused</h4>\n      <md-datepicker ng-model=\"$ctrl.myDate\" md-placeholder=\"Enter date\" md-open-on-focus></md-datepicker>\n    </div>\n\n    <div flex-gt-xs>\n      <h4>Date-picker that goes straight to the year view</h4>\n      <md-datepicker ng-model=\"$ctrl.myDate\" md-current-view=\"year\" md-placeholder=\"Enter date\"></md-datepicker>\n    </div>\n  </div>\n\n  <div layout-gt-xs=\"row\">\n    <div flex-gt-xs>\n      <h4>Custom calendar trigger</h4>\n      <md-datepicker ng-model=\"$ctrl.myDate\" md-placeholder=\"Enter date\" md-is-open=\"$ctrl.isOpen\"></md-datepicker>\n      <md-button class=\"md-primary md-raised\" ng-click=\"$ctrl.isOpen = true\">Open</md-button>\n    </div>\n  </div>\n</md-content>\n  "
})
    .config(['$locationProvider', '$mdThemingProvider', function ($locationProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
        // .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
        // $locationProvider.hashPrefix('😸');
        // $locationProvider.html5Mode({
        //   enabled: false,
        //   requireBase: false
        // });
        // $routeProvider
        //     .when('/🌶', {
        //         constroller: 'DashboardController',
        //         controllerAs: '$ctrl',
        //         templateUrl: './ng1.home.html'
        //     })
        //     .when('/🥐', {
        //         template: `
        //           <button>Hola 🥐</button>
        //         `
        //     });
    }]);
export var Ng1AppModule = angular.module('yolo-app');
// angular.module('yolo', [
//   yoloApp.name,
//   // yoloRoutes.name
// ]);  
//# sourceMappingURL=ng1.app.js.map