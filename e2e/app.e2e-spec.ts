import { Q2Page } from './app.po';

describe('q2 App', () => {
  let page: Q2Page;

  beforeEach(() => {
    page = new Q2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
