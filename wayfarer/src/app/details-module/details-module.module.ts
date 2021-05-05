import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CitiesComponent } from './details-page/cities/cities.component';
import { CityDetailsComponent } from './details-page/city-details/city-details.component';
import { LondonComponent } from './details-page/cities/london/london.component';
import { SydneyComponent } from './details-page/cities/sydney/sydney.component';
import { SanFrancisoComponent } from './details-page/cities/san-franciso/san-franciso.component';
import { SeattleComponent } from './details-page/cities/seattle/seattle.component';



@NgModule({
  declarations: [
    DetailsPageComponent,
    CitiesComponent,
    CityDetailsComponent,
    LondonComponent,
    SydneyComponent,
    SanFrancisoComponent,
    SeattleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailsModuleModule { }
