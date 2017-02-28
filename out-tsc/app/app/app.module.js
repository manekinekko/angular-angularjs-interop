import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardDirective } from './upgrade/dashboard.directive';
import { DatePickerDirective } from './upgrade/date-picker.directive';
import { DebugComponent } from './debug/debug.component';
var AppModule = (function () {
    function AppModule() {
    }
    // override to prevent Angular from bootstrapping itself
    AppModule.prototype.ngDoBootstrap = function (applicationRef) {
        // HACK: force bootstrapping of root component
        var componentRef = applicationRef.bootstrap(AppComponent);
        var router = componentRef.injector.get(Router);
        // router.setUpLocationChangeListener();
    };
    return AppModule;
}());
export { AppModule };
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent,
                    HomeComponent,
                    DashboardDirective,
                    DashboardComponent,
                    NotfoundComponent,
                    DatePickerDirective,
                    DebugComponent
                ],
                entryComponents: [
                    /** add downgraded Angular components here */
                    AppComponent
                ],
                imports: [
                    BrowserModule,
                    UpgradeModule,
                    FormsModule,
                    HttpModule,
                    RouterModule.forRoot([
                        { path: 'home', component: HomeComponent },
                        { path: 'dash', component: DashboardComponent },
                        { path: '', redirectTo: '/dash', pathMatch: 'full' },
                        { path: '**', component: NotfoundComponent }
                    ], {
                        enableTracing: true,
                        useHash: true,
                        initialNavigation: true
                    })
                ],
                bootstrap: [],
                providers: [],
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map