import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Welcome Gaurang to conFusion!');
  });
});
