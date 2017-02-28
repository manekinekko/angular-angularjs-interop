import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Ng1AppModule } from './app/ng1.app';
import { AppComponent } from './app/app.component';
import { downgradeNg2RootComponentToNg1 } from './main.ng1';
import { enableProdMode } from '@angular/core';
enableProdMode();
// 1) bootstrap Angular Injector (ie. AppModule)
try {
    platformBrowserDynamic().bootstrapModule(AppModule).then(function (platformRef) {
        // 2) bootstrap AngularJs Injector and wire the two up.
        downgradeNg2RootComponentToNg1(AppComponent).bootstrapModuleAngularJs(platformRef, Ng1AppModule);
    });
}
catch (e) {
    console.log('error happened when trying to get the $COMPILE from injector');
}
//# sourceMappingURL=main.js.map