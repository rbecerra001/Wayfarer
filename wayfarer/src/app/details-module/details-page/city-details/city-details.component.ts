import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities/datadetails';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  city: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = parseInt(params.get('id'));
        console.log(id);
        this.city = CITIES[id-1];
        this.city.posts = this.city.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }

}
