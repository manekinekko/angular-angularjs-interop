import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, ROUTER_CONFIGURATION } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HybridUrlHandlingStrategy, UrlHandlingStrategy } from './upgrade/url-handling-strategy';
import { HomeDirective } from './home/home.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDirective,
    DashboardComponent,
    NotfoundComponent
  ],
  entryComponents: [
    /** add upgraded AngularJs components here */
    AppComponent
  ],  
  imports: [
    BrowserModule, 
    UpgradeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'ng2', children: [
        {path: 'home', component: HomeComponent},
        {path: 'dash', component: DashboardComponent}
      ]},
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
    { provide: ROUTER_CONFIGURATION, useValue: {
      initialNavigation: true
    }},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '!' },
    RouterUpgradeInitializer,
    // { provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy }
  ],
})
export class AppModule {

  // override to prevent Angular from bootstrapping itself
  ngDoBootstrap() {}
}