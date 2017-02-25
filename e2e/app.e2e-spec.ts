import { TimberlineElectricPage } from './app.po';

describe('timberline-electric App', function() {
  let page: TimberlineElectricPage;

  beforeEach(() => {
    page = new TimberlineElectricPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
