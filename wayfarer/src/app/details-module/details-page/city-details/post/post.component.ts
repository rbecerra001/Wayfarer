import { Component, OnInit, Input } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {CITIES} from "../../cities/datadetails";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  cities: any = CITIES;
  city: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        const postId = parseInt(params.get('postId'), 10);
        this.city = CITIES.find(city => {
          return city.id === parseInt(params.get('id'), 10);
        });
        this.post = this.city.posts[postId];
      });
    console.log(this.city, this.post);
  }

}
