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

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    SlideOntoScreenDirective,
    SignComponent,
    BicycleComponent,
    ParkComponent,
    CloudComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
