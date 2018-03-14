const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================


const Op_Manage_Offer_Schema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    amount: {
      type: String,
    },
    buying_asset_code: {
      type: String,
    },
    buying_asset_issuer: {
      type: String,
    },
    buying_asset_type: {
      type: String,
    },
    priceN: {
      type: String,
    },
    priceD: {
      type: String,
    },
    selling_asset_code: {
      type: String,
    },
    selling_asset_issuer: {
      type: String,
    },
    selling_asset_type: {
      type: String,
    },
  },
    {
      timestamps: true
    });


module.exports = mongoose.model('Op_Manage_Offer', Op_Manage_Offer_Schema);
