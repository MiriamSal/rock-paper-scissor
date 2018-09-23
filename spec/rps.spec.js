const { Rps } = require('./spec.helper')

describe('Given computer picks rock', () => {
    let rps = new Rps()

    it('When user picks rock, its even', () => {
        expect(rps.pick('rock', 'rock')).to.eql('even');
    })

    it('When user picks scissors, user loose', () => {
        expect(rps.pick('rock', 'scissors')).to.eql('loose')
    })

    it('When user picks paper, user wins', () => {
        expect(rps.pick('rock', 'paper')).to.eql('win')
    })
})
