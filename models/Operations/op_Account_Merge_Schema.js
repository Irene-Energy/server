const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================


const Op_Account_Merge_Schema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    account: {
      type: String,
      required: true
    },
    into: {
      type: String,
    },
  },
    {
      timestamps: true
  }); 

  module.exports = mongoose.model('Op_Account_Merge', Op_Account_Merge_Schema);