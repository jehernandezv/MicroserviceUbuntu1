var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var body_parser = require('body-parser');
var { Elapsed } = require('./Elapsed');
var { Number } = require('./Number');
var { Sentence } = require('./Sentence');
var { Logger } = require('./Logger');
var { ValidateParams } = require('./ValidateParams');

var app = express();
var port = process.argv[2];
app.use(cors());
app.use(morgan('dev'));
app.use(body_parser.urlencoded({ extended: false }));


app.get('/api/ubuntu1/:min/:max', async function (req, res) {
  const elapsed = new Elapsed();
  const logger = new Logger();
  const validate = new ValidateParams();
  try {
    const number = new Number();
    const sentence = new Sentence();
    const { min, max } = req.params;
    validate.validateParams(min, max,sentence.getLength());
    const message = sentence.getSentence(number.getRandom(min, max));
    await res.json(logger.createLoggerSuccess(req, message, elapsed));
  } catch (e) {
    await res.json(logger.createLogErrorParams(req, e.cod, e.message, elapsed));
  }
});






app.listen(port, function () {
  console.log('Example app server ubuntu1 listening on port ' + port + '!');
});