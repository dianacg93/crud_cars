const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CarBrand = new Schema({
    manufacturer: {type: String, required: true},
    headquarters: {type: String, required: true},
    website: {type: String, required: true},
},
{timestamps: true}
)

module.exports = mongoose.model("car brands", CarBrand)