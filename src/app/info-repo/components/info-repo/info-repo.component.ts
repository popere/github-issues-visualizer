import { Component, Input } from '@angular/core';
import {InfoRepo} from '../../models/info-repo.model';

@Component({
  selector: 'info-repo',
  templateUrl: './info-repo.component.html',
  styleUrls: ['./info-repo.component.scss']
})
export class InfoRepoComponent {
  @Input() infoRepo: InfoRepo;
  @Input() error: boolean;

  /**
   * Method to be able to go to a url link in a new blank tab from the browser
   * @param link url to go
   */
  goToRepoLink(link: string) {
    window.open(link, '_blank');
  }
}
