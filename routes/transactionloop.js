var StellarSdk = require('stellar-sdk')
var StellarBase = require('stellar-base');
var mongoose = require('mongoose');

var express = require('express');
var router = express.Router();

var sourceFile = require('./code.js');

var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

StellarSdk.Network.usePublicNetwork();


function myFunction(srckey,seq,destkey,amt,sgn) { // Declare a function
    var account=new StellarSdk.Account(srckey,seq);
    var transaction = new StellarSdk.TransactionBuilder(account)
            // add a payment operation to the transaction
            .addOperation(StellarSdk.Operation.payment({
                    destination: destkey,
                    asset: StellarSdk.Asset.native(),
                    amount: amt  // in XML
                }))
            // add a set options operation to the transaction
            .build();
    transaction.sign(sgn);

    server.submitTransaction(transaction)
    .then(function(transactionResult) {
        console.log(JSON.stringify(transactionResult, null, 2));
        console.log('\nSuccess! View the transaction at: ');
        console.log(transactionResult._links.transaction.href);
    })
    .catch(function(err) {
        console.log('An error has occured:');
        console.log(err);
    });
};

var sourceKeypair = StellarSdk.Keypair.fromSecret('SECRET_KEY');
var sourceAccount = 'PUBLIC_KEY'
var destinationAccount = 'PUBLIC_KEY'
var seqNum;

server.loadAccount(sourceAccount)
// If the account is not found, surface a nicer error message for logging.
    .catch(StellarSdk.NotFoundError, function (error) {
        throw new Error('The destination account does not exist!');
    })
    // If there was no error, load up-to-date information on your account.
    .then(function() {
        return server.loadAccount(destinationAccount);
    })
    .then(function(sourceAccount) {
        
        for (let i = 0; i< (listaccount.length)  ; i++) {
            // Transaction will hold a built transaction we can resubmit if the result is unknown.
            seqNum = sourceAccount.sequenceNumber();
            console.log(seqNum);
            myFunction(sourceAccount,seqNum,destinationAccount,'mount',sourceKeypair);
            sourceAccount.incrementSequenceNumber();
        }
        
        
    })
    .then(function(result) {
        console.log('Success! Results:we have the sequence number');
    })
    .catch(function(error) {
        console.error('Something went wrong! When trying to obtain the sequence number');
    });




router.get('/', function(req, res, next) {
    
    res.render('index', { title: "transaction" });
});
  
module.exports = router;
