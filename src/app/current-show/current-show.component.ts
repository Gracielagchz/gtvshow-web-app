import { Component, OnInit } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  current: ICurrentShow
  constructor() {
    this.current = {
      show: 'Reset',
      network: 'Viceland',
      genres: '',
      image: '',
      episodes: 10,
      description: 'Documentary'
    }
   }

  ngOnInit(): void {
  }

}
