import { Component, OnInit, Input } from '@angular/core';
import { CITIES } from '../../cities/datadetails';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input("post") post: any;

  constructor() { }

  ngOnInit(): void {
  }

}
