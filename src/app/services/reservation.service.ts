import { Reservation } from './../model/reservation.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) { }

  getPassengerWithReservation(reservationCode: string): Observable<Reservation>{
    return this.http.get<Reservation>("reservations/view-reservation/"+reservationCode);
  }

  getAllReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>("reservations");
  }

}
