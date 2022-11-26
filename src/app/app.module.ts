import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SlideOntoScreenDirective } from './jumbotron/directives/slide-onto-screen.directive';
import { SignComponent } from './jumbotron/sign/sign.component';
import { BicycleComponent } from './jumbotron/bicycle/bicycle.component';
import { ParkComponent } from './jumbotron/park/park.component';
import { CloudComponent } from './jumbotron/cloud/cloud.component';
import { MainComponent } from './main/main.component';
import { MainCardComponent } from './main/main-card/main-card.component';
import { MaximizeCardDirective } from './core/directives/maximize-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    SlideOntoScreenDirective,
    SignComponent,
    BicycleComponent,
    ParkComponent,
    CloudComponent,
    MainComponent,
    MainCardComponent,
    MaximizeCardDirective,
  ],
  imports: [MatCardModule, BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
