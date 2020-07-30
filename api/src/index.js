var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var body_parser = require('body-parser');
var { Elapsed } = require('./Elapsed');
var { Number } = require('./Number');
var { Sentence } = require('./Sentence');
var { Logger } = require('./Logger');
var { Validate } = require('./Validate');
const number = new Number();
const logger = new Logger();
const sentence = new Sentence();
const validate = new Validate();
var app = express();
var port = process.argv[2];
var isSleep = process.argv[3];
var maxtimeSleep = process.argv[4];

app.use(cors());
app.use(morgan('dev'));
app.use(body_parser.urlencoded({ extended: false }));


app.get('/api/ubuntu1/:min/:max', async function (req, res) {
  const elapsed = new Elapsed();
 
  try {
    const { min, max } = req.params;
     //demora del server
    if(isSleep != null){
      await sleepServer(number.getRandom(1,maxtimeSleep));
    }
    validate.validate(min, max, sentence.getLength(),elapsed);
    await res.json(logger.createLoggerSuccess(req, sentence.getSentence(number.getRandom(min, max)), elapsed));
  } catch (e) {
    await res.json(logger.createLogErrorParams(req, e.cod || 5555, e.message, elapsed));
  }
});

function sleepServer(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.listen(port, function () {
  console.log('Example app server ubuntu1 listening on port ' + port + '!');
});