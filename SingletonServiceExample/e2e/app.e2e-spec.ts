import { SingletonServiceExamplePage } from './app.po';

describe('singleton-service-example App', () => {
  let page: SingletonServiceExamplePage;

  beforeEach(() => {
    page = new SingletonServiceExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
