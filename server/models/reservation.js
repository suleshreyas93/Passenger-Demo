const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    reservationCode:String,
    source:String,
    destination:String,
    passengers: Array,
});

const Reservation = mongoose.model("reservations", reservationSchema);

module.exports = {

    async getAllReservations() {
        return await Reservation.find({});
    },

    async getReservationByCode(code) {
        console.log("reservation code = "+code);
        return await Reservation.find({reservationCode: code});
    }
}