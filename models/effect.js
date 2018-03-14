const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Effect Schema
//================================


const Effect_Schema = new Schema({
    id: {
      type: String,
      unique: true,
      required: true
    },
    paging_token: {
      type: String,
    },
    account: {
      type: String,
    },
    type: {
      type: String,
    },
    type_i: {
      type: String,
    },
    seller: {
      type: String,
    },
    offer_id: {
      type: String,
    },
    sold_amount: {
      type: String,
    },
    sold_asset_type: {
      type: String,
    },
    sold_asset_code: {
      type: String,
    },
    sold_asset_issuer: {
      type: String,
    },
    bought_amount: {
      type: String,
    },
    bought_asset_type: {
      type: String,
    },
  },
    {
      timestamps: true
  }); 

  module.exports = mongoose.model('Effect', Effect_Schema);