var StellarSdk = require('stellar-sdk')
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
// var lastCursor=0; // or load where you left off

var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var sourceFile = require('./code.js');

var accountaddress1 = 'GBRCV24K7R46ZOB3RPMTJVYZ5G6II5GHWRINI32ZMWR5IA7UIPH4TAY7';
var accountaddress2 = 'GBD73F5SQXMVS6GA4S4NQ2G4I6QIJKE6BBMUNIXY7G6E2TTAIBJA743V';
var accountaddress3 = 'GBABNB36MGLFZUZN3FPEH44JX6DQJO4USIOO6DNS54YCCJWP563PZKJ5';


let uri = 'mongodb://malo:M007386179@ds157538.mlab.com:57538/datatest';

mongoose.connect(uri);

let db = mongoose.connection;

const User = require('../models/users')
const Op_Create_Account_Schema = require('../models/Operations/op_Create_Account.js');
const Op_Payement_Schema = require('../models/Operations/op_Payement_Schema.js');
const Op_Path_Payement_Schema = require('../models/Operations/op_Path_Payement_Schema.js');
const Op_Manage_Offer_Schema = require('../models/Operations/op_Manage_Offer_Schema.js');
const Op_Create_Passive_Offer_Schema = require('../models/Operations/op_Create_Passive_Offer_Schema.js');
const Op_Set_Option_Schema = require('../models/Operations/op_Set_Option_Schema.js');
const Op_Change_Trust_Schema = require('../models/Operations/op_Change_Trust_Schema.js');
const Op_Allow_Trust_Schema = require('../models/Operations/op_Allow_Trust_Schema.js');
const Op_Account_Merge_Schema = require('../models/Operations/op_Account_Merge_Schema.js');
const Op_Inflation_Schema = require('../models/Operations/op_Inflation_Schema.js');
const Op_Manage_Data_Schema = require('../models/Operations/op_Manage_Data_Schema.js');
const Transaction = require('../models/transactions')
const Effect = require('../models/effect')


var txHandlerOp = function (txResponse) {
    switch(txResponse.type_i) {
        case 0:
            Op_Create_Account_Schema.create({ 
                id:txResponse.id, 
                account: txResponse.account, 
                funder: txResponse.funder, 
                starting_balance: txResponse.starting_balance 
            }, function (err) { if (err) return handleError(err);})
            break;
        case 1:
            Op_Payement_Schema.create({ 
                id:txResponse.id, 
                from: txResponse.from, 
                amount: txResponse.amount, 
                asset_type: txResponse.asset_type,
                to: txResponse.to 
            }, function (err) { if (err) return handleError(err);})
            break;
        case 2:            
            Op_Path_Payement_Schema.create({ 
                id:txResponse.id, 
                from: txResponse.from, 
                amount: txResponse.amount, 
                to: txResponse.to,
                asset_type: txResponse.asset_type,
                asset_code: txResponse.asset_code,
                asset_issuer: txResponse.asset_issuer,
                source_asset_code: txResponse.source_asset_code,
                source_asset_issuer: txResponse.source_asset_issuer,
                source_asset_type: txResponse.source_asset_type,
                source_amount: txResponse.source_amount,
                source_max: txResponse.source_max
            }, function (err) { if (err) return handleError(err);})
            break;
        case 3:
            Op_Manage_Offer_Schema.create({ 
                id:txResponse.id, 
                amount: txResponse.amount, 
                buying_asset_code: txResponse.buying_asset_code, 
                buying_asset_issuer: txResponse.buying_asset_issuer,
                buying_asset_type: txResponse.buying_asset_type,
                priceN: txResponse.price.N,
                priceD: txResponse.price.D,
                selling_asset_code: txResponse.selling_asset_code,
                selling_asset_issuer: txResponse.selling_asset_issuer,
                selling_asset_type : txResponse.selling_asset_type
            }, function (err) { if (err) return handleError(err);})
            break;
        case 4:
            Op_Create_Passive_Offer_Schema.create({ 
                id:txResponse.id, 
                from: txResponse.from, 
                amount: txResponse.amount, 
                buying_asset_issuer: txResponse.buying_asset_issuer, 
                buying_asset_code: txResponse.buying_asset_code, 
                buying_asset_type: txResponse.buying_asset_type, 
                priceN: txResponse.price.N,
                priceD: txResponse.price.D,
                selling_asset_type: txResponse.selling_asset_type
            }, function (err) { if (err) return handleError(err);})
            break;
        case 5:
            Op_Set_Option_Schema.create({ 
                id:txResponse.id, 
                high_threshold: txResponse.high_threshold, 
                home_domain: txResponse.home_domain
            }, function (err) { if (err) return handleError(err);})
            break;
        case 6:
            Op_Change_Trust_Schema.create({ 
                id:txResponse.id, 
                asset_code: txResponse.asset_code, 
                asset_issuer: txResponse.asset_issuer, 
                asset_type: txResponse.asset_type,
                limit: txResponse.limit,
                trustee: txResponse.trustee,
                trustor : txResponse.trustor
            }, function (err) { if (err) return handleError(err);})        
            break;
        case 7:
            Op_Allow_Trust_Schema.create({ 
                id:txResponse.id, 
                asset_issuer: txResponse.asset_issuer, 
                asset_code: txResponse.asset_code, 
                asset_type: txResponse.asset_type,
                authorize: txResponse.authorize,
                trustee: txResponse.trustee,
                trustor : txResponse.trustor
            }, function (err) { if (err) return handleError(err);})
            break;
        case 8:
            Op_Account_Merge_Schema.create({ 
                id:txResponse.id, 
                account: txResponse.account, 
                into: txResponse.into
            }, function (err) { if (err) return handleError(err);})
            break;
        case 9:
            Op_Inflation_Schema.create({ 
                id:txResponse.id, 
                paging_token: txResponse.paging_token
            }, function (err) { if (err) return handleError(err);})
            break;
        case 10:
            Op_Manage_Data_Schema.create({ 
                id:txResponse.id, 
                source_account: txResponse.source_account, 
                name: txResponse.name,
                value: txResponse.value 
            }, function (err) { if (err) return handleError(err);})
            break;    
        default:
            console.log('Error txHandlerOp in the switch function')
    }
    console.log(txResponse.type_i);
};

var txHandlerTrans = function (txResponse) {
    Transaction.create({ id:txResponse.id ,
           account: txResponse.account ,
           operation_count: txResponse.operation_count,
           created_at: txResponse.created_at 
        }, function (err) { if (err) return handleError(err);})
};

var txHandlerEffect = function (txResponse) {
    Effect.create({ 
            id: txResponse.id ,
            paging_token: txResponse.paging_token,
            account: txResponse.account,
            type: txResponse.type,
            type_i: txResponse.type_i,
            seller: txResponse.seller,
            offer_id: txResponse.offer_id,
            sold_amount:txResponse.sold_amount,
            sold_asset_type:txResponse.sold_asset_type,
            sold_asset_code:txResponse.sold_asset_code,
            sold_asset_issuer:txResponse.sold_asset_issuer,
            bought_amount:txResponse.bought_amount,
            bought_asset_type:txResponse.bought_asset_type,
    },)
  };


var tr = server.transactions()
    .forAccount(accountaddress2)
    .cursor('now')
    .stream({
        onmessage: txHandlerTrans
    })

var op = server.operations()
    .forAccount(accountaddress1)
    .cursor('now')
    .stream({
        onmessage: txHandlerOp
    })


var ef = server.effects()
    .forAccount(accountaddress4)
    .cursor('now')
    .stream({
        onmessage : txHandlerEffect
    })

router.get('/', function(req, res, next) {
    res.render('index', { title: "routestream" });
});
  
module.exports = router;
