const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
brand: {
    type: String,
    required: true
},
model: {
    type: String,
    required: true
},
accelsec: {
    type: Number,
    required: true
},

powertrain: {
    type: String,
    required: true
},
seats: {
    type: Number,
    required: true
},
topspeed_km: {
    type: Number,
    required: true
},
range_km: {
    type: Number,
    required: true
},
battery_pack_kwh: {
    type: Number,
    required: true
},
rfficiency_whkm: {
    type: Number,
    required: true
},
fastcharge_kmh: {
    type: Number,
    required: true
},
priceEuro: {
    type: String,
    required: true
},
priceSouthAfricanRand: {
    type: String,
    required: true
},
rapidcharge: {
    type: String,
    required: true
},
plugtype: {
    type: String,
    required: true
},
segment: {
    type: String,
    required: true
},
bodystyle: {
    type: String,
    required: true
},
priceINR: {
    type: String ,
    required: true
},
picture_url:{
    type: String,
    required: true

},

pollutionDegree:{
    type: String,
    required: true
},
chargingTIme: {
    type: Number ,
    required: true
},

topSpeedComp: {
    type: Number ,
    required: true
},
fuelCost: {
    type: Number ,
    required: true
},

})

module.exports = Vehicle = mongoose.model('trending_only', vehicleSchema)

// {
//     "brand": "Audi",
//     "model": "Q4 e-tron",
//     "accelsec": 6.3,
//     "topspeed_km": 180,
//     "range_km": 400,
//     "battery_pack_kwh": 77,
//     "rfficiency_whkm": 193,
//     "fastcharge_kmh": 540,
//     "rapidcharge": "Yes",
//     "powertrain": "AWD",
//     "plugtype": "Type 2 CCS",
//     "bodystyle": "SUV",
//     "segment": "D",
//     "seats": 5,
//     "priceEuro": 55000,
//     "priceINR": 4587810.572
// }