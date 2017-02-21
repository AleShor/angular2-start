import { G10techNewPage } from './app.po';

describe('g10tech-new App', () => {
  let page: G10techNewPage;

  beforeEach(() => {
    page = new G10techNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
