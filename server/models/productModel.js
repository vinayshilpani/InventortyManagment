const mongoose = require("mongoose");
const schema = new mongoose.Schema(
    {
        cDate: {
            type: String,
        },
        productName: {
            type: String,
        },
        productImage: {
            type: String,
        },
        productCategory: {
            type: String,
        },
        productMRP: {
            type: Number,
        },
        productPrice: {
            type: Number,
        },
        productDesc: {
            type: String,
        },
    },
    { versionKey: false }
);

const productModel = mongoose.model("productModel", schema);
module.exports = productModel;