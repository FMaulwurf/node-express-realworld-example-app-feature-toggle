var router = require('express').Router();
var mongoose = require('mongoose');
let fflip = require('fflip');
let lodash = require('lodash');

// return a list of features
router.get('/', function(req, res, next) {
  let features = []
  let fflipFeatures = fflip.getFeaturesForUser();
  lodash.keys(fflipFeatures).forEach(feature => {
    if(fflipFeatures[feature]) {
      features.push(feature)
    }
  })
  return res.json({features: features});
});

module.exports = router;
