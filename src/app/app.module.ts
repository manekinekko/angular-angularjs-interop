import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterUpgradeInitializer } from '@angular/router/upgrade';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HybridUrlHandlingStrategy, UrlHandlingStrategy } from './upgrade/url-handling-strategy';
import { HomeDirective } from './home/home.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDirective
  ],
  entryComponents: [
    AppComponent
  ],  
  imports: [
    BrowserModule, 
    UpgradeModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '**', redirectTo: '/ng2/home', pathMatch: 'full'}, 
      {path: 'ng2', children: [
        {path: 'home', component: HomeComponent}
      ]}
    ])
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '!' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy }
  ],
})
export class AppModule {
  ngDoBootstrap() {}
}