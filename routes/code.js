var mongoose = require('mongoose');




var accountaddress1 = 'GBRCV24K7R46ZOB3RPMTJVYZ5G6II5GHWRINI32ZMWR5IA7UIPH4TAY7';
var accountaddress2 = 'GBD73F5SQXMVS6GA4S4NQ2G4I6QIJKE6BBMUNIXY7G6E2TTAIBJA743V';
var accountaddress3 = 'GBABNB36MGLFZUZN3FPEH44JX6DQJO4USIOO6DNS54YCCJWP563PZKJ5';

var sourcesecretKey1 = 'SAYOQ4QUVDESFKNHGC5AATE3T5JQ3OSD52QIGDR3XPCOUKC3VXFQOBBV';
var sourcesecretKey2 = "SBAOBZHBDZ23Y4K5FF5AYQZCMSIVOMTOZJEW4655SDSAD65WHNHYSKD2";
var sourcesecretKey3 = 'SD7I6XQBRSHMBGRW25PRIFS6SN3TYNCGZ5MWH5XXFFWLE22HIFT43GWF';



let uri = 'mongodb://malo:M007386179@ds157538.mlab.com:57538/datatest';

mongoose.connect(uri);

let db = mongoose.connection;

const Effect = require('../models/trade')

var mince = {
}

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
  console.log("I am finished")
};

txHandlerEffect(mince)

//module.exports = router;
