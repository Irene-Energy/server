const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================
 

const Op_Change_Trust_Schema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    asset_code: {
      type: String,
      required: true
    },
    asset_issuer: {
      type: String,
    },
    asset_type: {
      type: String,
    },
    limit: {
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

  module.exports = mongoose.model('Op_Change_Trust', Op_Change_Trust_Schema);