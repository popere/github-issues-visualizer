import {UtilsService} from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;
  beforeEach(() => { service = new UtilsService(); });

  it('#getGitHubURLInput should correct username and repositoryName', () => {
    expect(service.getGitHubURLInput('https://github.com/angular/angular'))
      .toEqual({username: 'angular', repositoryName: 'angular'});
  });

  it('#getGitHubURLInput should return null when format is not correct', () => {
    expect(service.getGitHubURLInput('github/angular/angular'))
      .toBe(null);
  });

  it('#getGitHubURLInput should return null with empty param', () => {
    expect(service.getGitHubURLInput(undefined))
      .toBe(null);
  });

});
