var { MyError } = require('./MyError');
class ValidateParams{

    constructor(){}

    validateParams(min, max, lengthList) {
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
        }
      }
}

module.exports = {ValidateParams};