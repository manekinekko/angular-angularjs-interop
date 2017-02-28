import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  t = 'Show';
  w = window as any;
  d = [];
  colors = {
    'ng2': 'rgba(243, 49, 112, 0.5)',
    'ng1': 'rgba(43, 195, 236, 0.5)',
    'ng-tansclude': 'rgba(246, 181, 0, 0.5)'
  };

  constructor() {

  }

  ngOnInit() {
  }

  toggle(){
    if (this.t === 'Show'){
      this.t = 'Hide';
      this.showContext();
    }
    else {
      this.t = 'Show';
      this.hideContext();
    }
  }

  hideContext() {
    this.d.map( d => {
      if (d.tagName !== 'APP-DEBUG' && d.tagName !== 'APP-ROOT') {
        d.classList.remove('__debug');
        if (d.tagName !== 'APP-ROOT' || d.tagName.startsWith('APP-')) {
          d.style.backgroundColor = '';
          d.style.borderColor = '';
        }
      }
    })
  }

  showContext() {
    this.d = [];
    this.loop(this.w.document.body, this.d);
    this.d.map( d => {
      // if (d.tagName !== 'APP-DEBUG' && d.tagName !== 'APP-ROOT') {
        d.classList.add('__debug');
        if (d.tagName === 'NG-TRANSCLUDE') {
          d.style.backgroundColor = this.colors['ng-transclude'];
          d.style.borderColor = this.colors['ng-transclude'];
        }
        else if (d.tagName.startsWith('APP-')) {
          d.style.backgroundColor = this.colors['ng2'];
          d.style.borderColor = this.colors['ng2'];
        }
        else if (d.tagName.startsWith('NG1-')) {
          d.style.backgroundColor = this.colors['ng1'];
          d.style.borderColor = this.colors['ng1'];
        }
      // }
    });
  }

  loop(node, els=[]) {
    if (node.nodeType == 1) {
 
        els.concat(this.visit(node, els));
 
        node = node.firstChild;
        while (node) {
            this.loop(node, els);
            node = node.nextSibling;
        }
    }
  }

  visit(node, els=[]) {
    const c = node.children;
    for (let i = 0; i < c.length; i++) {
      let childElement = c[i];
      let t = childElement.tagName;
      if (t.startsWith('APP-') || t.startsWith('NG1-') || t === 'NG-TRANSCLUDE'){
        els.push(childElement);
      }
    }
  }

}
