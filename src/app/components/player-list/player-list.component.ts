import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: any[] = [
    {
      name: 'Ben'
    },
    {
      name: 'Holly'
    },
    {
      name: 'Justin'
    },
    {
      name: 'Matt'
    },
    {
      name: 'JD'
    },
    {
      name: 'Kevin'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
