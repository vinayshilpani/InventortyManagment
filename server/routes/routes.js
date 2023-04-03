const express = require("express");
const route = express.Router();
const multer = require("multer");
const moment = require("moment");

// custome modules
const productModel = require("../models/productModel");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/upload/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    const allowedFileType = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedFileType.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let upload = multer({ storage, fileFilter });

route.post("/addItems", upload.single("productImage"), async (req, res) => {
    let { productName, productDesc, productCategory, productPrice, productMRP } = req.body;
    let productImage = req.file.filename;
    let cDate = moment().format("DD MMM YYYY");
    try {
        let insertData = await productModel.insertMany({ cDate, productName, productDesc, productCategory, productPrice, productMRP, productImage });
        res.send("DataSaved");
    }
    catch (err) {
        console.log(err);
    }
})


route.get("/getInventoryData", async (req, res) => {
    let productsData = await productModel.find().sort({ _id: -1 });
    console.log(productsData);
    res.json(productsData);
})

route.get("/getInventoryCount", async (req, res) => {
    let productsDataCount = await productModel.count();
    console.log(productsDataCount);
    res.json({productsDataCount});
})


module.exports = route;