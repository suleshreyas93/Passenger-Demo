import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reservationSearch'
})
export class ReservationSearchPipe implements PipeTransform {

  transform(reservations: any[], searchReservationCode: string): any {
    if(!reservations)
    {
      return [];
    }

    if(!searchReservationCode)
    {
      return reservations;
    }

    searchReservationCode = searchReservationCode.toLowerCase();

    return reservations.filter(res => {
      console.log("res", res);
      return res.reservationCode.toLocaleLowerCase().includes(searchReservationCode);
    });
  }

}
