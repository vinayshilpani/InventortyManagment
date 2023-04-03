const mongoose = require("mongoose");
require('dotenv').config();
const DBURL = process.env.MONGOURL;
// const DBURL = ;

const dataBase = () => {
    const connectionParams = { useNewUrlParser: true };
    mongoose.connect(DBURL, connectionParams);

    mongoose.connection.on("connected", () => {
        console.log("Database Connected");
    })

    mongoose.connection.on("error", () => {
        console.log("Error in Databases");
    })

    mongoose.connection.on("disconnected", () => {
        console.log("Database Disconnected");
    })
}


module.exports = dataBase;