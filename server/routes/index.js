const reservationRoutes = require("./reservations");

const constructorMethod = (app) => {

    app.use("/reservations", reservationRoutes);
}

module.exports = constructorMethod;