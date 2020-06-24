import {browser, by, element, ElementFinder} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.title')).getText() as Promise<string>;
  }

  getTitlePage(): Promise<string> {
    return browser.getTitle() as Promise<string>;
  }

  getInput(): ElementFinder {
    return element(by.css('input')) as ElementFinder;
  }

  getTitleRepositoryInfo(): ElementFinder {
    return element(by.css('.info-title')) as ElementFinder;
  }

  getTitleIssues(): ElementFinder {
    return element(by.css('.issues-title')) as ElementFinder;
  }

  getContainterIssues(): ElementFinder {
    return element(by.css('#issues-cards')) as ElementFinder;
  }

  getInputError(): ElementFinder {
    return element(by.css('.errorMessage')) as ElementFinder;
  }

  getInfoRepoError(): ElementFinder {
    return element(by.css('.error-container h3')) as ElementFinder;
  }

  getButtonNextPage(): ElementFinder {
    return element(by.css('.mat-paginator-navigation-next')) as ElementFinder;
  }

}
