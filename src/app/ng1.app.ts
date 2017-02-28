import * as angular from 'angular';
import 'angular-route';

class DashboardController {
  ng1Data = {} as any;
  click = 0;
  static $inject = ['Ng1Service'];
  constructor(service) {
    this.ng1Data.foo = service.foo();
  }
  ng1Event(...args){}
  fire() {
    this.ng1Event({data: this.ng1Data, ng1: true, transclude: true, click:this.click++});
  }
}

class DatePickerController {
  static $inject = [];
  myDate = new Date();
  isOpen = false;
}

const yoloApp = angular.module('yolo-app', ['ngMaterial', 'ngMessages'])
.controller('DashboardController', DashboardController)
.service('Ng1Service', class Ng1Service {
  foo() {
    return {message: 'from AngularJs'};
  }
})
.component('ng1-dashboard', {
  bindings: {
    ng1Data: '<',
    ng1Event: '&'
  },
  transclude: {
    'date': '?ng1-date-picker',
    'text': '?text-slot'
  },
  template: `
    <b>Input (from Angular):</b> 
    <ng-transclude></ng-transclude>
    <ng-transclude ng-transclude-slot="date-picker">[ng-transclude-slot="date"]</ng-transclude>
    <ng-transclude ng-transclude-slot="text">[ng-transclude-slot="text"]</ng-transclude>
    <button ng-click="$ctrl.fire()">send event to Angular (output)</button>
    <pre>{{ $ctrl.ng1Data | json }}</pre>
    `,
  controller: DashboardController
})
.component('ng1-date-picker', {
  controller: DatePickerController,
  template: `
<md-content layout-padding ng-cloak>
  <div layout-gt-xs="row">
    <div flex-gt-xs>
      <h4>Standard date-picker</h4>
      <md-datepicker ng-model="$ctrl.myDate" md-placeholder="Enter date"></md-datepicker>
    </div>

    <div flex-gt-xs>
      <h4>Disabled date-picker</h4>
      <md-datepicker ng-model="$ctrl.myDate" md-placeholder="Enter date" disabled></md-datepicker>
    </div>
  </div>

  <div layout-gt-xs="row">
    <div flex-gt-xs>
      <h4>Opening the calendar when the input is focused</h4>
      <md-datepicker ng-model="$ctrl.myDate" md-placeholder="Enter date" md-open-on-focus></md-datepicker>
    </div>

    <div flex-gt-xs>
      <h4>Date-picker that goes straight to the year view</h4>
      <md-datepicker ng-model="$ctrl.myDate" md-current-view="year" md-placeholder="Enter date"></md-datepicker>
    </div>
  </div>

  <div layout-gt-xs="row">
    <div flex-gt-xs>
      <h4>Custom calendar trigger</h4>
      <md-datepicker ng-model="$ctrl.myDate" md-placeholder="Enter date" md-is-open="$ctrl.isOpen"></md-datepicker>
      <md-button class="md-primary md-raised" ng-click="$ctrl.isOpen = true">Open</md-button>
    </div>
  </div>
</md-content>
  `
})
.config(['$locationProvider', '$mdThemingProvider', ($locationProvider, $mdThemingProvider) => {
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

export const Ng1AppModule = angular.module('yolo-app');
// angular.module('yolo', [
//   yoloApp.name,
//   // yoloRoutes.name
// ]); 