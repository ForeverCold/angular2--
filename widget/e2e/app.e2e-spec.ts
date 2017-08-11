import { WidgetPage } from './app.po';

describe('widget App', () => {
  let page: WidgetPage;

  beforeEach(() => {
    page = new WidgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
