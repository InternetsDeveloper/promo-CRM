import { ASPage } from './app.po';

describe('Antera App', () => {
    let page: ASPage;

    beforeEach(() => {
        page = new ASPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
