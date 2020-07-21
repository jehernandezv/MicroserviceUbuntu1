var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var axios = require('axios');
var body_parser = require('body-parser');
var os = require('os');

var app = express();
var port = process.argv[2];
var ipMidleware = process.argv[3];



app.use(cors());
app.use(morgan('dev'));
app.use(body_parser.urlencoded({ extended: false }));


app.get('/api/ubuntu1/:min/:max', async function (req, res) {
  const { min, max } = req.params;
  const random = Math.floor(Math.random() * ((max - min)) + 1);
  await res.json({
    message: random
  });
  //Peticion al middleware para almacenar el log actual
  await axios.post('http://'+ipMidleware+':3000/saveLog', {
    method: req.method,
    url:req.url,
    httpVersion:req.httpVersion,
    statusCode:req.res.statusCode,
    statusMessage:req.res.statusMessage,
    nameHost:os.hostname(),
    systemHost:os.release(),
    dateHost:new Date(),
    outputServerHost:random,
    hostOS:os.platform(),
    hostType:os.type(),
    hostArch:os.arch()
  }).then(response => {
    console.log(response.data);
  }).catch(e => {
    console.log(e);
  });
});

app.listen(port, function () {
  console.log('Example app server ubuntu1 listening on port ' + port + '!');
});