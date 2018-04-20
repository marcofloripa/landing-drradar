import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AppointmentComponent } from './appointment/appointment.component';

const appRoutes: Routes = [
  { path: 'appointment/:id', component: AppointmentComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
