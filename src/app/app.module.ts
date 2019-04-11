import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 

import { AppComponent } from './app.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationService } from './services/reservation.service';
import { ReservationSearchPipe } from './reservation-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ReservationSearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
