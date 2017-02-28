import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HybridUrlHandlingStrategy, UrlHandlingStrategy } from './upgrade/url-handling-strategy';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { DashboardDirective } from './upgrade/dashboard.directive';
import { DatePickerDirective } from './upgrade/date-picker.directive';
import { DebugComponent } from './debug/debug.component';

@NgModule({
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
      {path: 'home', component: HomeComponent},
      {path: 'dash', component: DashboardComponent},
      {path: '', redirectTo: '/dash', pathMatch: 'full'},
      {path: '**', component: NotfoundComponent}
    ], {
      enableTracing: true,
      useHash: true,
      initialNavigation: true
    })
  ],
  bootstrap: [
    // AppComponent
    /** DON'T BOOTSTRAP ANY COMPONENT HERE, LET ANGULARJS DO THE JOB */
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy },
    // RouterUpgradeInitializer
  ],
})
export class AppModule {

  // override to prevent Angular from bootstrapping itself
  ngDoBootstrap(applicationRef: ApplicationRef) {

    // HACK: force bootstrapping of root component
    const componentRef = applicationRef.bootstrap(AppComponent);
    const router = componentRef.injector.get(Router) as Router;
    // router.setUpLocationChangeListener();


  }
}