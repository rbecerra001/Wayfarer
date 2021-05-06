import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-tiny',
  templateUrl: './cityTiny.component.html',
  styleUrls: ['./cityTiny.component.css']
})
export class CityTinyComponent implements OnInit {
  @Input('city') city: any;
  constructor() { }

  ngOnInit(): void {
  }

}
