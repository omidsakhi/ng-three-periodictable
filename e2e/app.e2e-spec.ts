import { NgThreePeriodictablePage } from './app.po';

describe('ng-three-periodictable App', function() {
  let page: NgThreePeriodictablePage;

  beforeEach(() => {
    page = new NgThreePeriodictablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
