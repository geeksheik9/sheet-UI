import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonplayer-list',
  templateUrl: './nonplayer-list.component.html',
  styleUrls: ['./nonplayer-list.component.scss']
})
export class NonplayerListComponent implements OnInit {
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
