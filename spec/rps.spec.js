const { Rps } = require('./spec.helper')

describe('Given user picks rock', () => {
    let rps = new Rps()

    it ('When computer picks rock, its even',() => {
        expect(rps.pick('rock','rock')).to.eql('even');
    }) 

    it ('When computer picks scissor, user wins',() =>{
        expect(rps.pick('rock','scissor')).to.eql('wins')
    })
})

