const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const mainRoute = require("./routes/routes");
const dataBase = require("./database/connection");
dataBase();

// set express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// render routes
app.use(mainRoute);


app.listen(port, () => {
    console.log(`Server is Running ${port}`);
})