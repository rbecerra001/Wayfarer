import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { DetailsPageComponent} from './details-module/details-page/details-page.component';
import { DetailsModuleModule } from './details-module/details-module.module';
import { RouterModule } from '@angular/router';
import { CitiesComponent } from './details-module/details-page/cities/cities.component';
import { HomepageComponent } from './homepage/homepage.component';
import {CityTinyComponent} from './details-module/details-page/cities/cityTiny/cityTiny.component';
import {CityDetailsComponent} from "./details-module/details-page/city-details/city-details.component";
import {PostComponent} from "./details-module/details-page/city-details/post/post.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    TopicsComponent,
    DetailsPageComponent,
    HomepageComponent
 ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    DetailsModuleModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'cities',
        component: DetailsPageComponent,
        children: [
          {
            path: ':id',
            component: CityDetailsComponent
          },
          {
            path: ':id/posts/:postId',
            component: PostComponent
          }
        ]
      },
      {
        path: '',
        component: HomepageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
