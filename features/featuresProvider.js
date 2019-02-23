let fflip = require('fflip');
let lodash = require('lodash');

module.exports = {
  getActiveFeatures: function () {
    let features = []
    let fflipFeatures = fflip.getFeaturesForUser();
    lodash.keys(fflipFeatures).forEach(feature => {
      if(fflipFeatures[feature]) {
        features.push(feature)
      }
    });
    return features
  }
};
