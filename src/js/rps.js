function Rps() {
    this.pick = (userP, compP) => {

        if (userP === compP) {
            return 'even';
        }
        else if (userP === 'rock' && compP === 'scissor') { 
            return 'wins'; 
        }
        else {
            return 'loose';
        }
    }
}   