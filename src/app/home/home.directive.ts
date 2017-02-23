import { 
  Directive, 
  ElementRef, 
  Injector, 
  Input, 
  Output, 
  EventEmitter, 
  SimpleChanges,
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  OpaqueToken
} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

/**
 * Upgraded components are Angular directives, instead of components, 
 * because Angular is unaware that AngularJS will create elements under it. 
 * As far as Angular knows, the upgraded component is just a directive - a tag - 
 * and Angular doesn't have to concern itself with it's children.
 */

@Directive({
  selector: 'ng1-home'
})
export class HomeDirective extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
    OnDestroy {
  
  @Input('ng1Data') data: any;
  @Output('ng1Event') event: EventEmitter<any>;

  constructor(elementRef: ElementRef, injector: Injector) {

    // AngularJs component "ng1Home" must exist!
    super('ng1Home', elementRef, injector);
  }

  ngOnInit() { super.ngOnInit(); }
  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }
  ngDoCheck() { super.ngDoCheck(); }
  ngOnDestroy() { super.ngOnDestroy(); }
}
