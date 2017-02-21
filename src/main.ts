import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { Ng1AppModule } from './app/ng1.app';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
.then(platformRef => {
  
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, [Ng1AppModule.name], {strictDi: true});

  // const upgrade = (<any>platformRef.instance).upgrade;
  // upgrade.bootstrap(document.body, ['yolo'], {strictDi: true});
  // setUpLocationSync(upgrade);
})
// .catch( e => {
//   console.error(e);
// });