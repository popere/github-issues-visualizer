import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoRepo} from '../../models/github.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService {

  private _githubApi: string = 'https://api.github.com/repos/';

  constructor(private _http: HttpClient) {
  }

  searchRepoInfo(userName: string, repositoryName: string) {
    const url = `${this._githubApi}${userName}/${repositoryName}`;
    return this._http.get<InfoRepo>(url);
  }


}