import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities/datadetails';
import { ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  city: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = parseInt(params.get('id'));
        if (id) {
          this.city = CITIES[id - 1];

          this.http
            .get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.city.zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
            .subscribe(response => {
              console.log(response);
              let weatherResponse: any;
              weatherResponse = response;
              this.city.weather = {};
              this.city.weather.description = weatherResponse.weather[0].description;
              this.city.weather.maxTemp = weatherResponse.main.temp_max;
              this.city.weather.minTemp = weatherResponse.main.temp_min;
              console.log(this.city.weather);
            });

          this.city.posts = this.city.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          return this.city.id === parseInt(params.get('id'));
        }
    });

  }
}
