const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservation");

router.get("/", async(req, res) => {
    //res.send("Hello World");
    try
    {
        let allReservations = await Reservation.getAllReservations();
        console.log(allReservations);
        res.json(allReservations);
    }
    catch(e)
    {
        console.log(e);
    }
});

router.get("/view-reservation/:reservationCode", async(req, res) => {
    try
    {
        let reservation = await Reservation.getReservationByCode(req.params.reservationCode);
        res.json(reservation);
    }
    catch(e)
    {
        console.log(e);
    }
    
})
{

}

module.exports = router;