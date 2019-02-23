module.exports = {
  createFeatureDecisions: function (features) {
    return {
      includeArticleShareFeature: function (){
        return features.includes("article-share-feature");
      },
      includeArticleStatisticsFeature: function (){
        return features.includes("article-statistics-feature");
      },
      // ... additional decision functions also live here ...
    };
  }
};
