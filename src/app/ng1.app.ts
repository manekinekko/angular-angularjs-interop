import * as angular from 'angular';
import 'angular-route';

const yoloApp = angular.module('yolo-app', ['ngRoute'])
.controller('HomeController', class HomeController {
  works = 'home works';
  static $inject = ['Ng1Service'];
  constructor(s) {
    this.works = `${this.works} - ${s.foo()}`
  }
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
    <button ng-click="$ctrl.fire()">fire 🌶</button>
  `,
  controller: ['Ng1Service', (service) => {
    this.message = 'Angular 1 Home Component';
    this.from = service.foo();
    this.fire = () => {
      debugger;
      this.data.more = 'Hello from AngularJs';
      this.event(this.data);
      console.log(this.data);
    }
  }]
})
// .config(['$locationProvider', ($locationProvider) => {
// }]);

// const yoloRoutes = angular.module('yolo-routes', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    // $locationProvider.hashPrefix('😸');
    // $locationProvider.html5Mode({
    //   enabled: false,
    //   requireBase: false
    // });

    $routeProvider
        .when('/🌶', {
            constroller: 'HomeController',
            controllerAs: '$ctrl',
            templateUrl: './ng1.home.html'
        })
        .when('/🥐', {
            template: `
              <button>Hola 🥐</button>
            `
        });
}]);

export const Ng1AppModule = angular.module('yolo-app');
// angular.module('yolo', [
//   yoloApp.name,
//   // yoloRoutes.name
// ]); 