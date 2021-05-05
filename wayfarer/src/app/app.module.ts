import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { DetailsPageComponent} from "./details-module/details-page/details-page.component";
import { DetailsModuleModule } from "./details-module/details-module.module";


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    TopicsComponent,
    DetailsPageComponent

 ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    DetailsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
