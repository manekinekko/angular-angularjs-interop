import { RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';

export { UrlHandlingStrategy } from '@angular/router';

/**
 * @deprecated not used for now since the router doesn't work with ngUpgrade
 */
export class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  
  shouldProcessUrl(url: UrlTree) { 

    // use only process the `/ng2` prefixed urls
    // return url.toString().startsWith('/ng2');

    // process all urls
    return true;
  }
  extract(url: UrlTree) { 
    return url;
  }
  merge(url: UrlTree, whole: UrlTree) {
    return url;
  }
}