const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let rock = fs.readFileSync('./src/js/rps.js');
eval( rock + '\nexports.Rps = Rps;')