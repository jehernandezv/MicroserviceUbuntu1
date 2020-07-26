function MyError(message,cod) {
    this.cod = cod;
    this.message = message || 'El servicio no pudo reconocer el error';
    var error = new Error(this.message);
    error.name = this.name;
    this.stack = error.stack;
  }
  MyError.prototype = Object.create(Error.prototype);

  module.exports = {MyError};
 