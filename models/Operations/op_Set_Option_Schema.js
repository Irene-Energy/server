const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================

const Op_Set_Option_Schema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true
    },
    high_threshold: {
      type: String,
      required: true
    },
    home_domain: {
      type: String,
    },
  },
    {
      timestamps: true
  });  

module.exports = mongoose.model('Op_Set_Option', Op_Set_Option_Schema);