import { AnonymousNotesPage } from './app.po';

describe('anonymous-notes App', function() {
  let page: AnonymousNotesPage;

  beforeEach(() => {
    page = new AnonymousNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
