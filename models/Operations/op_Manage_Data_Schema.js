const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//================================
// Operations Schema
//================================
 

const Op_Manage_Data_Schema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  source_account: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  value: {
    type: String,
  },
},
  {
    timestamps: true
});

//================================
// Export Schema
//================================

module.exports = mongoose.model('Op_Manage_Data', Op_Manage_Data_Schema);
