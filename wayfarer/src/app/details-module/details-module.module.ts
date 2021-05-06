import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CitiesComponent } from './details-page/cities/cities.component';
import { CityDetailsComponent } from './details-page/city-details/city-details.component';
import { CityTinyComponent } from './details-page/cities/cityTiny/cityTiny.component';
import {RouterModule} from '@angular/router';
import { PostComponent } from './details-page/city-details/post/post.component';

@NgModule({
  declarations: [
    // DetailsPageComponent,
    CitiesComponent,
    CityDetailsComponent,
    CityTinyComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
    ])
  ],
  exports: [
    CitiesComponent,
    CityDetailsComponent,
    CityTinyComponent,
    PostComponent

  ]
})
export class DetailsModuleModule { }
