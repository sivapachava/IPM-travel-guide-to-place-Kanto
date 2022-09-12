const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let attractionSchema = new Schema({
    attractionName: {
        type: String
    },
    attractionDescription: {
        type: String
    },

}, {
    collection: 'attractionDetails'
})

module.exports = mongoose.model('attractionDetails', attractionSchema)