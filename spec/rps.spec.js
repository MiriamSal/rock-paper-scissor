const { rps } = require('./spec.helper.js')

// let rps = new rps

describe('Rock Paper Scissors', () => {

    it ('expect true to be false',() => {
        expect(rps.result(1)).to.eql('true');
    }) 
})

