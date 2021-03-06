import { Component, Output, EventEmitter, Input } from '@angular/core';
import {IssueRepo} from '../../models/issue-repo.model';
import {InfoRepo} from '../../../info-repo/models/info-repo.model';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'issues-repo',
  templateUrl: './issues-repo.component.html',
  styleUrls: ['./issues-repo.component.scss']

})
export class IssuesRepoComponent {
  @Input() issuesRepo: IssueRepo[];
  @Input() infoRepo: InfoRepo;
  @Input() pageIssues: number;
  @Input() perPageIssues: number;
  @Input() error: boolean;
  @Output() newPageToLoad = new EventEmitter<{repo_name: string, username: string, page: number, per_page: number}>();

  constructor() {
  }

  /**
   * Method to get new issues from new page
   * @param pageEvent pagination changed attributes
   */
  pageChanged(pageEvent: PageEvent) {
    this.newPageToLoad.emit({
      repo_name: this.infoRepo.name,
      username: this.infoRepo.owner.login,
      page: pageEvent.pageIndex,
      per_page: pageEvent.pageSize
    });
  }

  /**
   * Method to open an issue in a new blank tab
   * @param link url from the GitHub issue
   */
  goToIssueLink(link: string) {
    window.open(link, '_blank');
  }
}
