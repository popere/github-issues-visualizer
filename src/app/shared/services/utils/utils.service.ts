import {Injectable} from '@angular/core';
import {InputRepo} from '../../models/github.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  regexpGitHub = /https:\/\/github\.com\/([^/]+)\/([^/]+)(\/.+)*/i;

  constructor() {
  }

  getGitHubURLInput(url: string): InputRepo | null {
    if (this.regexpGitHub.test(url)) {
      const exec = this.regexpGitHub.exec(url);
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
