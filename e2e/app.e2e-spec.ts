import { DulcisonaPage } from './app.po';

describe('dulcisona App', () => {
  let page: DulcisonaPage;

  beforeEach(() => {
    page = new DulcisonaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
