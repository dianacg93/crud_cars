const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CarModel = new Schema({
    model: {type: String, required: true},
    type: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String, required: true},
    brand_id: {type: Schema.Types.ObjectId, ref:"car brands"},
},
{timestamps: true}
)

module.exports = mongoose.model("car models", CarModel)