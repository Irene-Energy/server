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

const Effect = require('../models/trade')


var txHandlerEffect = function (txResponse) {
    console.log('I am in the trade function');
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
    },
)
};

var tr = server.effects()
    .forAccount(accountaddress1)
    .cursor('now')
    .stream({
        onmessage : txHandlerEffect
    })



