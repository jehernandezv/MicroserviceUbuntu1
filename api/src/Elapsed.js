class Elapsed {

    constructor(){
        this.start = process.hrtime();
    }
    elapsed() {
        const end = process.hrtime(this.start);
        return ((end[0] * 1000) + (end[1] / 1000000));
    }
}
module.exports = {Elapsed};
