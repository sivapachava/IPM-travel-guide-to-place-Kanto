const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kantoSchema = new Schema({
 cityName: {
    type: String
  },
  cityDescription: {
    type: String
  },
  badges: {
    type: String
  },
 
}, {
  collection: 'kantoDetails'
})

module.exports = mongoose.model('kantoDetails', kantoSchema)