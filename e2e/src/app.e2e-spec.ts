import { AppPage } from './app.po';
import {browser, ExpectedConditions} from 'protractor';

describe('testing App', () => {
  let page: AppPage;
  const until = ExpectedConditions;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getTitlePage()).toEqual('GitHub Issues Visualizer');
  });

  it('should display title in h1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('GitHub Issues Visualizer');
  });

  it('should display incorrect format in input', () => {
    page.navigateTo();
    page.getInput().clear();
    page.getInput().sendKeys('github');
    browser.wait(until.presenceOf(page.getInputError()), 5000, 'Element taking too long to appear in the DOM');
    expect(page.getInputError().getText()).toEqual('Please enter a correct GitHub repository.');
  });

  it('should display error getting repository info', () => {
    page.navigateTo();
    page.getInput().clear();
    page.getInput().sendKeys('https://github.com/a/a');
    browser.wait(until.presenceOf(page.getInfoRepoError()), 5000, 'Element taking too long to appear in the DOM');
    expect(page.getInfoRepoError().getText()).toEqual('Error getting repository info.');
  });

  it('should display repo info', () => {
    page.navigateTo();
    page.getInput().clear();
    page.getInput().sendKeys('https://github.com/angular/a');
    browser.wait(until.presenceOf(page.getTitleRepositoryInfo()), 5000, 'Element taking too long to appear in the DOM');
    expect(page.getTitleRepositoryInfo().getText()).toEqual('GITHUB REPOSITORY INFO');
  });

  it('should display issues info', () => {
    page.navigateTo();
    page.getInput().clear();
    page.getInput().sendKeys('https://github.com/angular/a');
    browser.wait(until.presenceOf(page.getTitleIssues()), 50000, 'Element taking too long to appear in the DOM');
    expect(page.getTitleIssues().getText()).toEqual('ISSUES and PULL REQUESTS');
  });

  it('should display issues info after clicking next page', () => {
    page.navigateTo();
    page.getInput().clear();
    page.getInput().sendKeys('https://github.com/angular/angular');
    browser.wait(until.presenceOf(page.getButtonNextPage()), 50000, 'Element taking too long to appear in the DOM');
    page.getButtonNextPage().click();
    browser.sleep(2000);
    expect(page.getContainterIssues()).toBeDefined();
  });


});
