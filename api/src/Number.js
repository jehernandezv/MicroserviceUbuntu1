class Number{ 
    constructor(){}
    getRandom(min,max){
      return Math.floor(Math.random() * ((max - min)) + 1);
    }
}
module.exports = {Number};

