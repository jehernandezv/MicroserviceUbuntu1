var os = require('os');
class Logger{

    constructor(){}

    createLogErrorParams(req, status, errorMessage, elapsed) {
        const log = {
          method: req.method,
          url: req.url,
          httpVersion: req.httpVersion,
          statusCode: status,
          statusMessage: errorMessage,
          nameHost: os.hostname(),
          systemHost: os.release(),
          dateHost: new Date(),
          timeProcessService: elapsed.getElapsed(),
          message: errorMessage,
          hostOS: os.platform(),
          hostType: os.type(),
          hostArch: os.arch()
        }
        return log
      }
      
    createLoggerSuccess(req, message, elapsed) {
        const log = {
          method: req.method,
          url: req.url,
          httpVersion: req.httpVersion,
          statusCode: req.res.statusCode,
          statusMessage: req.res.statusMessage,
          nameHost: os.hostname(),
          systemHost: os.release(),
          dateHost: new Date(),
          timeProcessService: elapsed.getElapsed(),
          message: message,
          hostOS: os.platform(),
          hostType: os.type(),
          hostArch: os.arch()
        }
        return log
      }
}

module.exports = {Logger};