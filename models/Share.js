var mongoose = require('mongoose');

var ShareSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
  sharetype: {type: String, required: true }
}, {timestamps: true});

// Requires population of author
ShareSchema.methods.toJSONFor = function(user){
  return {
    id: this._id,
    sharetype: this.sharetype,
    createdAt: this.createdAt,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Share', ShareSchema);
