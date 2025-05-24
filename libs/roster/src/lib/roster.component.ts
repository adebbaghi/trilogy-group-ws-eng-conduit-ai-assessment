import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RosterService } from './roster.service';

interface RosterEntry {
  username: string;
  profileLink: string;
  articleCount: number;
  totalFavorites: number;
  firstArticleDate: string;
}

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: []
})
export class RosterComponent implements OnInit {
  roster$!: Observable<RosterEntry[]>;

  constructor(private rosterService: RosterService) {}

  ngOnInit(): void {
    this.roster$ = this.rosterService.getRoster();
  }
}
