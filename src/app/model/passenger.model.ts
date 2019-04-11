export interface Passenger
{
    firstName: String;
    lastName: String;
    contact: {
        cellphone: String,
        home: String

    };
    address: {
        street: String,
        apt: String,
        city: String,
        state: String,
        zipcode: String
    };
    seat: {
        class: String,
        row: String,
        seatNo: number
    };
}