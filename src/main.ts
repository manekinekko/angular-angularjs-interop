import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Ng1AppModule } from './app/ng1.app';
import { AppComponent } from './app/app.component';
import { downgradeNg2RootComponentToNg1 } from './main.ng1';

import { enableProdMode } from '@angular/core';
enableProdMode();

// 1) bootstrap Angular Injector (ei. AppModule)
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {

  // 2) bootstrap AngularJs Injector and wire the two up.
  downgradeNg2RootComponentToNg1(AppComponent).bootstrapModuleAngularJs(platformRef, Ng1AppModule);
});