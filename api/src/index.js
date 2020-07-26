var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var body_parser = require('body-parser');
var os = require('os');
var {MyError} = require('./MyError');
var {Elapsed} = require('./Elapsed');

const e = require('express');
var app = express();
var port = process.argv[2];
app.use(cors());
app.use(morgan('dev'));
app.use(body_parser.urlencoded({ extended: false }));


app.get('/api/ubuntu1/:min/:max', async function (req, res) {
  const elapsed = new Elapsed();
  const sentences = [
    "“Nunca había pasado antes.”",
    "“Pues ayer funcionaba…”",
    "“¿Cómo es posible?”",
    "“Tiene que ser un problema de tu hardware.”",
    "“¿Qué hiciste mal para lograr que fallara?”",
    "“Algo debe de estar mal en tus datos.”",
    "“¡Si no he tocado ese módulo en meses!”",
    "“Debes de estar usando una versión anterior.”",
    "“Es sólo una desafortunada coincidencia.”",
    "“¡Es que no lo puedo probar todo!”",
    "“ESTO, no puede ser la causa de ESO.”",
    "“Funciona, pero no lo he probado.”",
    "“¡Alguien debe de haber cambiado mi código!”"
  ];
  try {
    const { min, max } = req.params;
    validateParams(min, max, sentences.length);
    const random = Math.floor(Math.random() * ((max - min)) + 1);
    const sentence = sentences[random];
    await res.json(createLoggerSuccess(req,sentence,));
  } catch (e) {
    await res.json(createLogErrorParams(req, e.cod, e.message,elapsed));
  }
});


function createLogErrorParams(req, status, errorMessage,elapsed) {
  const log = {
    method: req.method,
    url: req.url,
    httpVersion: req.httpVersion,
    statusCode: status,
    statusMessage: errorMessage,
    nameHost: os.hostname(),
    systemHost: os.release(),
    dateHost: new Date(),
    timeProcessService: elapsed.elapsed(),
    message: errorMessage,
    hostOS: os.platform(),
    hostType: os.type(),
    hostArch: os.arch()
  }
  return log
}

function createLoggerSuccess(req, random,elapsed) {
  const log = {
    method: req.method,
    url: req.url,
    httpVersion: req.httpVersion,
    statusCode: req.res.statusCode,
    statusMessage: req.res.statusMessage,
    nameHost: os.hostname(),
    systemHost: os.release(),
    dateHost: new Date(),
    timeProcessService: elapsed.elapsed(),
    message: random,
    hostOS: os.platform(),
    hostType: os.type(),
    hostArch: os.arch()
  }
  return log
}

function validateParams(min, max, lengthList) {
  if (min == max) {
    throw new MyError('El servicio no permite como parametros numeros iguales', 1001);
  } else if (max < min) {
    throw new MyError('Error de rangos, el valor maximo < valor minimo', 1002);
  } else if (max == null || min == null){
    throw new MyError('Error de rangos, el valor maximo < valor minimo', 1003);
  } else if (max < 0 || min < 0){
    throw new MyError('El servicio debe funcionar con numeros enteros positivos', 1004);
  }else if (max > lengthList || min <= 0){
    throw new MyError('Error, el servicio acepta un rango entre 1 y '+ lengthList, 1005);
  }
}


app.listen(port, function () {
  console.log('Example app server ubuntu1 listening on port ' + port + '!');
});