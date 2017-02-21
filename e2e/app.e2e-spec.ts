import { AngularAngularjsInteropPage } from './app.po';

describe('angular-angularjs-interop App', () => {
  let page: AngularAngularjsInteropPage;

  beforeEach(() => {
    page = new AngularAngularjsInteropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
