const port = 3003

const express = require('express')
const server = express()

var prices = require('../resources/prices.json');
var plans = require('../resources/plans.json');

console.log(prices[1].codigo);

module.exports={
    process: function(req, res){
        console.log("Getting http request:");
        res.status(200).end();
    }
};