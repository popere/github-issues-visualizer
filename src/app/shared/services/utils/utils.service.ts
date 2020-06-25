import {Injectable} from '@angular/core';
import {InputRepo} from '../../models/github-api.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private _regexpGitHub = /https:\/\/github\.com\/([^/]+)\/([^/]+)(\/.+)*/i;

  constructor() {
  }

  /**
   * Method to get repository and username form a GitHub URL
   * It returns null if format is not correct
   * @param url link to the GitHub repository
   */
  getGitHubURLInput(url: string): InputRepo | null {
    if (this._regexpGitHub.test(url)) {
      const exec = this._regexpGitHub.exec(url);
      if (exec) {
        return {
          username: exec[1],
          repositoryName : exec[2]
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
