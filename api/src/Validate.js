var { MyError } = require('./MyError');
class Validate{

    constructor(){}

    validate(min, max, lengthList, elapsed) {
        if (min == max) {
          throw new MyError('El servicio no permite como parametros numeros iguales', 1001);
        } else if (max < min) {
          throw new MyError('Error de rangos, el valor maximo > valor minimo', 1002);
        } else if (max == null || min == null) {
          throw new MyError('Error de rangos, los parametros no pueden ser nulos', 1003);
        } else if (max < 0 || min < 0) {
          throw new MyError('El servicio debe funcionar con numeros enteros positivos', 1004);
        } else if (max > lengthList || min <= 0) {
          throw new MyError('Error, el servicio acepta un rango entre 1 y ' + lengthList, 1005);
        } else if(elapsed.getElapsed() > 5000){
          throw new MyError('timeOut, el servicio se ha demorado en responder',408);
        }
      }
}

module.exports = {Validate};