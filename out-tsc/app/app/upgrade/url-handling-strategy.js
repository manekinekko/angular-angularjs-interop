export { UrlHandlingStrategy } from '@angular/router';
/**
 * @deprecated not used for now since the router doesn't work with ngUpgrade
 */
var HybridUrlHandlingStrategy = (function () {
    function HybridUrlHandlingStrategy() {
    }
    HybridUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) {
        // use only process the `/ng2` prefixed urls
        // return url.toString().startsWith('/ng2');
        // process all urls
        return true;
    };
    HybridUrlHandlingStrategy.prototype.extract = function (url) {
        return url;
    };
    HybridUrlHandlingStrategy.prototype.merge = function (url, whole) {
        return url;
    };
    return HybridUrlHandlingStrategy;
}());
export { HybridUrlHandlingStrategy };
//# sourceMappingURL=url-handling-strategy.js.map