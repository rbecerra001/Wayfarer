import { Component, OnInit } from '@angular/core';
import { CITIES} from './datadetails';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  city = CITIES;
  constructor() { }

  ngOnInit(): void {
  }

}
