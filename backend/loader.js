const port = 3003

const express = require('express')
const server = express()

const prices = require('../resources/prices.json');
const plans = require('../resources/plans.json');

console.log(plans);
console.log(prices);

function process(req, resp) {
    var data_beneficiary = new Array(); // list of beneficiaries
    
    var q_beneficiaries = data_beneficiary.length;

    // process categories= 1, 2 and 3
    for (var p in data_beneficiary) {
        if(data_beneficiary[p].age <= 17) {
            data_beneficiary[p].cat = 1
        } else {
            if(data_beneficiary[p].age < 17 && data_beneficiary[p].age >= 40) {
                data_beneficiary[p].cat = 2;
            } else {
                if(data_beneficiary[p].age < 40){
                    data_beneficiary[p].cat = 3;
                }
            }
        }
    }
    console.log(q_beneficiaries);
}


module.exports={
    process: function(req, res){
        console.log("Getting http request:");
        res.status(200).end();
    }
};