const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================




const Op_Allow_Trust_Schema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    asset_issuer: {
      type: String,
      required: true
    },
    asset_code: {
      type: String,
    },
    asset_type: {
      type: String,
    },
    authorize: {
      type: String,
    },
    trustee: {
      type: String,
    },
    trustor: {
      type: String,
    },
  },
    {
      timestamps: true
  }); 

  module.exports = mongoose.model('Op_Allow_Trust', Op_Allow_Trust_Schema);