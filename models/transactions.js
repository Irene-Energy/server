const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//= ===============================
// Transaction Schema
//= ===============================

const TransactionSchema = new Schema({
    id: {
      type: String,
      unique: true,
      required: true
    },
    account: {
      type: String,
      required: true
    },
    operation_count: {
      type: Number,
    },
    created_at:{
      type: String ,
    },
  },
    {
      timestamps: true
    });

module.exports = mongoose.model('Transactions', TransactionSchema);