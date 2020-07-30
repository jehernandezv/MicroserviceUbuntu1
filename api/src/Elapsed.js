class Elapsed {

    constructor(){
        this.start = process.hrtime();
    }
    getElapsed() {
        const end = process.hrtime(this.start);
        return ((end[0] * 1000) + (end[1] / 1000000));
    }
}
module.exports = {Elapsed};
