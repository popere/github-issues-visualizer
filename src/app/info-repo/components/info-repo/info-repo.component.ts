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

  goToRepoLink(link: string) {
    window.open(link, '_blank');
  }
}
