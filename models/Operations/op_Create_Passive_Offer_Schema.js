const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================


const Op_Create_Passive_Offer_Schema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    from: {
      type: String,
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
    priceD:{
      type: String,
    },
    selling_asset_type: {
      type: String,
    },
  },
    {
      timestamps: true
    }); 


module.exports = mongoose.model('Op_Create_Passive_Offer', Op_Create_Passive_Offer_Schema);