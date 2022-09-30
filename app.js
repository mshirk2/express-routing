const express = require('express');
const ExpressError = require('./expressError');
const {findMean, findMedian, findMode, convertNums} = require("./helpers");

const app = express();

////////////////////// Calculator Routes

app.get('/mean', function(req, res){
    if (!req.query.nums){
        throw new ExpressError("Please enter a set of numbers separated by a comma", 400)
    }
    let numString = req.query.nums.split(',')
    let nums = convertNums(numString);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "mean",
        result: findMean(nums)
    }
    return res.send(result)
});


app.get('/median', function(req, res){
    if (!req.query.nums){
        throw new ExpressError("Please enter a set of numbers separated by a comma", 400)
    }
    let numString = req.query.nums.split(',')
    let nums = convertNums(numString);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "median",
        result: findMedian(nums)
    }
    return res.send(result)
});


app.get('/mode', function(req, res){
    if (!req.query.nums){
        throw new ExpressError("Please enter a set of numbers separated by a comma", 400)
    }
    let numString = req.query.nums.split(',')
    let nums = convertNums(numString);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "mode",
        result: findMode(nums)
    }
    return res.send(result)
});


////////////////////// Error Routes

app.use(function(req, res, next){
    const notFound = new ExpressError("Not Found", 404);
    return next(notFound)
});


app.use(function(err, req, res, next){
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error:{message, status}
    });
})


////////////////////// Server

app.listen(3000, function(){
    console.log('App on port 3000');
  }) 