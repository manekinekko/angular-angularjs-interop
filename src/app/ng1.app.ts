import * as angular from 'angular';
import 'angular-route';

angular.module('yolo', ['ngRoute'])
.controller('HomeController', class HomeController {
  works = 'home works';
})
.service('Ng1Service', class Ng1Service {
  foo() {
    return 'from AngularJs';
  }
})
.component('ng1Home', {
  bindings: {
    ng1Data: '<',
    ng1Event: '&'
  },
  template: `
    {{ $ctrl.message }} {{ $ctrl.from }}
    {{ $ctrl.data | json }}
    <button ng-click="$ctrl.fire()"></button>
  `,
  controller: ['Ng1Service', (service) => {
    this.message = 'Home Component';
    this.from = service.foo();
    this.fire = () => {
      this.data.more = 'Hello from AngularJs';
      this.event(this.data);
    }
  }]
})
.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
        .when('/ng1/home', {
            constroller: 'HomeController',
            controllerAs: '$ctrl',
            templateUrl: './ng1.home.html'
        })
        .otherwise('/ng2/home')
}]);

export const Ng1AppModule = angular.module('yolo'); 