module.exports = {
  featureAwareFactoryBasedOn: function (featureDecision) {
    return {
      allowedToReturnRoute: function (route){
        if( featureDecision ){
          return route;
        }
      }
    };
  }
};