webpackJsonp([1,5],{

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".block {\n    display: block;\n    padding: 10px;\n    margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ":host,\nng-transclude,\nng1-date-picker,\nng1-dashboard {\n    display: block;\n    padding: 10px;\n    margin: 10px;\n    border: 1px solid transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "span {\n    padding: 2px 10px;\n    border-radius: 10px;\n    text-shadow: 1px 1px 1px white;\n    color: rgba(0, 0, 0, 0.7);\n}\n\n.ng2 {\n    background: rgba(243, 49, 112, 0.5);\n}\n\n.ng1 {\n    background: rgba(43, 195, 236, 0.5);\n}\n\n.ng-transclude {\n    background: rgba(246, 181, 0, 0.5);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<h1>\n    Angular AngularJS Interop\n</h1>\n\n<a [routerLink]=\"['/home']\">home</a>\n<a [routerLink]=\"['/dash']\">Dashboard</a>\n\n<!-- @todo: ANGULARJS not working for now -->\n<!--<a href=\"#!/🌶\">AngularJs 🌶</a>\n<a href=\"#!/🥐\">AngularJs 🥐</a>-->\n\n<app-debug></app-debug>\n\n\n<!--ANGULAR router-->\n<router-outlet></router-outlet>\n\n<!--ANGULARJS router-->\n<!--<div ng-view></div>-->"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<p>\n    dashboard home from angular (>=2)\n</p>\n\n\n<ng1-dashboard [ng1Data]=\"ng2Data\" (ng1Event)=\"ng2Fire($event)\">\n    <section>\n        <p>Dashboard from AngularJs (transcluded)</p>\n        <button (click)=\"sendRandomNg1Data()\">random data</button>\n        <pre>{{ ng1Data | json }}</pre>\n    </section>\n    <ng1-date-picker></ng1-date-picker>\n</ng1-dashboard>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<button (click)=\"toggle()\">{{ t }} contexts</button>\n<span class=\"ng2\">ng2</span>\n<span class=\"ng1\">ng1</span>\n<span class=\"ng-transclude\">ng-transclude</span>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<p>\n    home from angular (>=2)\n</p>"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_upgrade_static__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notfound_notfound_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__upgrade_dashboard_directive__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upgrade_date_picker_directive__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__debug_debug_component__ = __webpack_require__(206);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    // override to prevent Angular from bootstrapping itself
    AppModule.prototype.ngDoBootstrap = function (applicationRef) {
        // HACK: force bootstrapping of root component
        var componentRef = applicationRef.bootstrap(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]);
        var router = componentRef.injector.get(__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]);
        // router.setUpLocationChangeListener();
    };
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__upgrade_dashboard_directive__["a" /* DashboardDirective */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__notfound_notfound_component__["a" /* NotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__upgrade_date_picker_directive__["a" /* DatePickerDirective */],
            __WEBPACK_IMPORTED_MODULE_12__debug_debug_component__["a" /* DebugComponent */]
        ],
        entryComponents: [
            /** add downgraded Angular components here */
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_upgrade_static__["b" /* UpgradeModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot([
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
                { path: 'dash', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                { path: '', redirectTo: '/dash', pathMatch: 'full' },
                { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__notfound_notfound_component__["a" /* NotfoundComponent */] }
            ], {
                enableTracing: true,
                useHash: true,
                initialNavigation: true
            })
        ],
        bootstrap: [],
        providers: [],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(171),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
DebugComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-debug',
        template: __webpack_require__(172),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [])
], DebugComponent);

//# sourceMappingURL=debug.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(173),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_route__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_route__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng1AppModule; });


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
var yoloApp = __WEBPACK_IMPORTED_MODULE_0_angular__["module"]('yolo-app', ['ngMaterial', 'ngMessages'])
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
var Ng1AppModule = __WEBPACK_IMPORTED_MODULE_0_angular__["module"]('yolo-app');
// angular.module('yolo', [
//   yoloApp.name,
//   // yoloRoutes.name
// ]);  
//# sourceMappingURL=ng1.app.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    return NotfoundComponent;
}());
NotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-notfound',
        template: __webpack_require__(174),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], NotfoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_upgrade_static__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDirective; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
}(__WEBPACK_IMPORTED_MODULE_1__angular_upgrade_static__["c" /* UpgradeComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('ng1Data' /* aliases are not working */),
    __metadata("design:type", Object)
], DashboardDirective.prototype, "ng1Data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Output */])('ng1Event' /* aliases are not working */),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _a || Object)
], DashboardDirective.prototype, "ng1Event", void 0);
DashboardDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
        selector: 'ng1-dashboard'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Injector */]) === "function" && _c || Object])
], DashboardDirective);

var _a, _b, _c;
//# sourceMappingURL=dashboard.directive.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_upgrade_static__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerDirective; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
}(__WEBPACK_IMPORTED_MODULE_1__angular_upgrade_static__["c" /* UpgradeComponent */]));
DatePickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
        selector: 'ng1-date-picker'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Injector */]) === "function" && _b || Object])
], DatePickerDirective);

var _a, _b;
//# sourceMappingURL=date-picker.directive.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_upgrade_static__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return downgradeNg2RootComponentToNg1; });


var downgradeNg2RootComponentToNg1 = function (rootComponent) {
    // get hold of the main AngularJs module (ie. yolo-app)
    window.angular.module('yolo-app')
        .directive('appRoot', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_upgrade_static__["a" /* downgradeComponent */])({ component: rootComponent }));
    return {
        bootstrapModuleAngularJs: function (platformRef, Ng1AppModule) {
            return new Promise(function (res, rej) {
                // get the upgrade module from Angular
                var injector = platformRef.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_upgrade_static__["b" /* UpgradeModule */]);
                // use it to bootstrap AngularJs
                // make sure to wait untill Ng1AppModule is full loaded
                setTimeout(function (_) { return injector.bootstrap(document.body, [Ng1AppModule.name], { strictDi: true }); }, 100);
                // sync up location and routings 
                // @todo the router is not working 
                // setUpLocationSync(upgrade);
                res();
            });
        }
    };
};
//# sourceMappingURL=main.ng1.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 83;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(170),
        styles: [__webpack_require__(158)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ng1_app__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_ng1__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);






__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["a" /* enableProdMode */])();
// 1) bootstrap Angular Injector (ie. AppModule)
try {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]).then(function (platformRef) {
        // 2) bootstrap AngularJs Injector and wire the two up.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__main_ng1__["a" /* downgradeNg2RootComponentToNg1 */])(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* AppComponent */]).bootstrapModuleAngularJs(platformRef, __WEBPACK_IMPORTED_MODULE_2__app_ng1_app__["a" /* Ng1AppModule */]);
    });
}
catch (e) {
    console.log('error happened when trying to get the $COMPILE from injector');
}
//# sourceMappingURL=main.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.bundle.js.map