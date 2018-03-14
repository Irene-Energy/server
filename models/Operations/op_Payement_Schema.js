const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================


const Op_Payement_Schema = new Schema({
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
    to: {
      type: String,
    },
  },
    {
      timestamps: true
    });

    module.exports = mongoose.model('Op_Payement', Op_Payement_Schema);
