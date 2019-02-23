var router = require('express').Router();
let featureProvider = require('../../features/featuresProvider');
// return a list of features
router.get('/', function(req, res, next) {
  return res.json({features: featureProvider.getActiveFeatures()});
});

module.exports = router;
