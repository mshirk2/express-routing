const express = require('express');
const ExpressError = require('./expressError');
const {findMean, findMedian, findMode} = require("./helpers");

const app = express();


app.get('/mean', function(req, res, next){
    if (!req.query.nums)
    
    return res.send('The mean is ')
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