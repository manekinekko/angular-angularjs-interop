/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './debug.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from './debug.component';
const styles_DebugComponent:any[] = [import0.styles];
export const RenderType_DebugComponent:import1.RendererTypeV2 = import1.ɵcreateRendererTypeV2({
  encapsulation: 0,
  styles: styles_DebugComponent,
  data: {animation: ([] as any[])}
}
);
export function View_DebugComponent_0():import1.ɵViewDefinition {
  return import1.ɵviewDef(0,[
      import1.ɵelementDef(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import2.DebugComponent = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.toggle()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import1.ɵtextDef((null as any),[
      '',
      ' contexts'
    ]
    ),
    import1.ɵtextDef((null as any),['\n']),
      import1.ɵelementDef(0,(null as any),(null as any),1,'span',[[
        'class',
        'ng2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import1.ɵtextDef((null as any),['ng2']),
    import1.ɵtextDef((null as any),['\n']),
      import1.ɵelementDef(0,(null as any),(null as any),1,'span',[[
        'class',
        'ng1'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import1.ɵtextDef((null as any),['ng1']),
    import1.ɵtextDef((null as any),['\n']),
      import1.ɵelementDef(0,(null as any),(null as any),1,'span',[[
        'class',
        'ng-transclude'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import1.ɵtextDef((null as any),['ng-transclude'])
  ]
  ,(null as any),(check,view) => {
    var comp:import2.DebugComponent = view.component;
    const currVal_0:any = comp.t;
    check(view,1,0,currVal_0);
  });
}
const RenderType_DebugComponent_Host:import1.RendererTypeV2 = import1.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_DebugComponent_Host_0():import1.ɵViewDefinition {
  return import1.ɵviewDef(0,[
    import1.ɵelementDef(0,(null as any),(null as any),1,'app-debug',([] as any[]),(null as any),(null as any),(null as any),View_DebugComponent_0,RenderType_DebugComponent),
    import1.ɵdirectiveDef(1025,(null as any),0,import2.DebugComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(check,view) => {
    check(view,1,0);
  },(null as any));
}
export const DebugComponentNgFactory:import1.ComponentFactory<import2.DebugComponent> = import1.ɵcreateComponentFactory('app-debug',import2.DebugComponent,View_DebugComponent_Host_0);