const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================



const Op_Path_Payement_Schema = new Schema({
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
    asset_type: {
      type: String,
    },
    asset_code: {
      type: String,
    },
    asset_issuer: {
      type: String,
    },
    source_asset_code: {
      type: String,
    },
    source_asset_issuer: {
      type: String,
    },
    source_asset_type: {
      type: String,
    },
    source_amount: {
      type: String,
    },
    source_max: {
      type: String,
    },
    to: {
      type: String,
    },
  },
    {
      timestamps: true
    });

    module.exports = mongoose.model('Op_Path_Payement', Op_Path_Payement_Schema);
