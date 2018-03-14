const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================



const Op_Create_Account_Schema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    account: {
      type: String,
      required: true
    },
    funder: {
      type: String,
    },
    starting_balance: {
      type: String,
    },
  },
    {
      timestamps: true
    });

module.exports = mongoose.model('Op_Create_Account', Op_Create_Account_Schema);