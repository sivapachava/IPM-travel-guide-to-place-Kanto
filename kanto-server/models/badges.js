const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let badgesSchema = new Schema({
    badgeName: {
        type: String
    },
    badgeDescription: {
        type: String
    },

}, {
    collection: 'badgeDetails'
})

module.exports = mongoose.model('badgeDetails', badgesSchema)