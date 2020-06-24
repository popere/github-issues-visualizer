import {Injectable} from '@angular/core';
import {InputRepo} from '../../models/github.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private _regexpGitHub = /https:\/\/github\.com\/([^/]+)\/([^/]+)(\/.+)*/i;

  constructor() {
  }

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
