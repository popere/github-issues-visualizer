import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoRepo, Issue} from '../../models/github.model';

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

  getIssues(userName: string, repositoryName: string, page: number, perPage: number) {
    const url = `${this._githubApi}${userName}/${repositoryName}/issues`;
    return this._http.get<Issue[]>(url, {
      params: {
        page: page.toString(),
        per_page: perPage.toString()
      }});
  }


}
