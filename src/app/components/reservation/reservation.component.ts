import { Reservation } from './../../model/reservation.model';
import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'passenger',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationCode:string = "";
  reservation: Reservation;
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {

    this.getAllReservations();
  }

  getReservation()
  {
    this.reservationService.getPassengerWithReservation(this.reservationCode).subscribe(res => {
      this.reservation = res;
    });
  }

  getAllReservations() {
    this.reservationService.getAllReservations().subscribe(res => {
      this.reservations = res;
      console.log(this.reservations);
    })
  }
}
