import * as angular from 'angular';
import 'angular-route';

class HomeController {
  ng1Data = {} as any;
  static $inject = ['Ng1Service'];
  constructor(service) {
    this.ng1Data.foo = service.foo();
  }
  ng1Event(...args){}
  fire() {
    this.ng1Event({data: this.ng1Data});
  }
}

const yoloApp = angular.module('yolo-app', [])
.controller('HomeController', HomeController)
.service('Ng1Service', class Ng1Service {
  foo() {
    return {message: 'from AngularJs'};
  }
})
.component('ng1Home', {
  bindings: {
    ng1Data: '<',
    ng1Event: '&'
  },
  template: `
    {{ $ctrl.ng1Data | json }}
    <button ng-click="$ctrl.fire()">fire 🌶</button>`,
  controller: HomeController
})
.config(['$locationProvider', ($locationProvider) => {
// .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    // $locationProvider.hashPrefix('😸');
    // $locationProvider.html5Mode({
    //   enabled: false,
    //   requireBase: false
    // });

    // $routeProvider
    //     .when('/🌶', {
    //         constroller: 'HomeController',
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