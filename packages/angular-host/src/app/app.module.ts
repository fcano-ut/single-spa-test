import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParcelModule } from 'single-spa-angular/parcel';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParcelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
