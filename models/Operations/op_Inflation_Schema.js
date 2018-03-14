const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================


const Op_Inflation_Schema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    paging_token: {
      type: String,
      required: true
    },
  },
    {
      timestamps: true
  });


  module.exports = mongoose.model('Op_Inflation', Op_Inflation_Schema);