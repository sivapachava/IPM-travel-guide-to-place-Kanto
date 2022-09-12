const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let citiesSchema = new Schema({
    cityName: {
        type: String
    },
    cityDescription: {
        type: String
    },

}, {
    collection: 'citiesDetails'
})

module.exports = mongoose.model('citiesDetails', citiesSchema)