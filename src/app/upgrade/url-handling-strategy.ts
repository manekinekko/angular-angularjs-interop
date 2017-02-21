import { RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';

export { UrlHandlingStrategy } from '@angular/router';

export class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  
  // use only process the `/ng2` url
  shouldProcessUrl(url: UrlTree) { 
    return url.toString().startsWith('/ng2/');
  }
  extract(url: UrlTree) { 
    return url;
  }
  merge(url: UrlTree, whole: UrlTree) {
    return url;
  }
}