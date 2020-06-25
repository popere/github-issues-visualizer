import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoRepo, Issue} from '../../models/github-api.model';

@Injectable({
  providedIn: 'root'
})
export class GitHubApiService {

  private _githubApi: string = 'https://api.github.com/repos/';

  constructor(private _http: HttpClient) {
  }

  /**
   * Method to get repository general information from GitHub
   * @param userName username from the repository
   * @param repositoryName name of the repository
   */
  searchRepoInfo(userName: string, repositoryName: string) {
    const url = `${this._githubApi}${userName}/${repositoryName}`;
    return this._http.get<InfoRepo>(url);
  }

  /**
   * Method to get issues from a repository from GitHub
   * @param userName username from the repository
   * @param repositoryName name of the repository
   * @param page number of the issues page
   * @param perPage quantity of issues per page
   */
  getIssues(userName: string, repositoryName: string, page: number, perPage: number) {
    const url = `${this._githubApi}${userName}/${repositoryName}/issues`;
    return this._http.get<Issue[]>(url, {
      params: {
        page: page.toString(),
        per_page: perPage.toString()
      }});
  }


}
