import { Passenger } from './passenger.model';
export interface Reservation
{
    reservationCode: string;
    source: string;
    destination: string;
    passengers: Array<Passenger>;
}