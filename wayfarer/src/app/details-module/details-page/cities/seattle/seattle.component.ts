import { Component, OnInit } from '@angular/core';
import { CITIES } from '../datadetails';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city: any;
  post: any;
  constructor() { }

  ngOnInit(): void {
    this.city = CITIES[3];
    this.post = this.city.posts[0];
  }

}
