const express = require('express');
const attractionRoute = express.Router();


let attractionModel = require('../models/attraction');

attractionRoute.route('/createattractions').put((req, res, next) => {
    attractionModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

attractionRoute.route('/getAttractions').get((req, res, next) => {
    attractionModel.find({},{"fileName":1,"_id":0},(error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});




module.exports = RDFRoute;