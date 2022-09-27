const express = require('express');

const app = express();

app.get('/mean', function(req, res){
    return res.send('The mean is ')
});

app.listen(3000, function(){
    console.log('App on port 3000');
  }) 