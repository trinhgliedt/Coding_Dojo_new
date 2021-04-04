const { response } = require("express")
const { Product} = require('../models/product.model');
// require("./server/config/mongoose.config");
require(".././config/mongoose.config");

// module.exports.index = (req, res) =>{
//     res.json({
//         message: "Hello World!"
//     });
// };

module.exports = {
    displayAll(req, res) {
        Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    displayOne(req, res) {
        Product.findById(req.params.id)
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.json(err);
        })
    },

    createProduct(req, res) {
        Product.create(req.body)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        })
    },
}