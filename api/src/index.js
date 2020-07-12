var express = require('express');
var cors = require('cors');
const morgan = require('morgan');
var app = express();
var port = process.argv[2];
app.use(cors());
app.use(morgan('dev'));

app.get('/api/ubuntu1/:min/:max', function (req, res) {
    const {min,max} = req.params;
    res.json({
     message: Math.floor(Math.random() * ((max - min)) + 1)
    });
  });

  app.listen(port, function () {
    console.log('Example app server ubuntu1 listening on port '+ port+'!');
  });