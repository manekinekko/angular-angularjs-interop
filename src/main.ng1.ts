import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';

export const downgradeNg2RootComponentToNg1 = (rootComponent) => {
  
  // get hold of the main AngularJs module (ie. yolo-app)
  (window as any).angular.module('yolo-app')

  // we must downgrade the root component so AngularJS can bootstrap it
  .directive('appRoot',
    downgradeComponent({component: rootComponent}) as angular.IDirectiveFactory
  );

  return {
    bootstrapModuleAngularJs(platformRef, Ng1AppModule) {
      return new Promise( (res, rej) => {

        // get the upgrade module from Angular
        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;

        // use it to bootstrap AngularJs
        upgrade.bootstrap(document.body, [Ng1AppModule.name], {strictDi: true});

        // sync up location and routings 
        setUpLocationSync(upgrade);
        res();

      });
    }
  }
}