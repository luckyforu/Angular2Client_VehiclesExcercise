import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Vehicle } from './vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    Vehicle
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'vehicles', component: Vehicle},
      {path: '**', component: Vehicle}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}