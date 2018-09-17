const { Rps } = require('./spec.helper')

describe('Given user picks rock', () => {
    let rps = new Rps()

    it('When computer picks rock, its even', () => {
        expect(rps.pick('rock', 'rock')).to.eql('even');
    })

    it('When computer picks scissor, user wins', () => {
        expect(rps.pick('rock', 'scissor')).to.eql('wins')
    })

    it ('When computer picks paper, user loose', () => {
        expect(rps.pick('rock', 'paper')).to.eql('loose')
    })
})

describe('Given user picks scissor', () => {
    let rps = new Rps()

    it('When computer picks rock, user loose', () => {
        expect(rps.pick('scissor', 'rock')).to.eql('loose');
    })

})