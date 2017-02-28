import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';
export var downgradeNg2RootComponentToNg1 = function (rootComponent) {
    // get hold of the main AngularJs module (ie. yolo-app)
    window.angular.module('yolo-app')
        .directive('appRoot', downgradeComponent({ component: rootComponent }));
    return {
        bootstrapModuleAngularJs: function (platformRef, Ng1AppModule) {
            return new Promise(function (res, rej) {
                // get the upgrade module from Angular
                var injector = platformRef.injector.get(UpgradeModule);
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