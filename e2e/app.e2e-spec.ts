import { LedboardControllerPage } from './app.po';

describe('ledboard-controller App', () => {
  let page: LedboardControllerPage;

  beforeEach(() => {
    page = new LedboardControllerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
