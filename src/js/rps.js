function Rps() {
    this.pick = (compP, userP) => {

        if (compP === userP) {
            return 'even';
        }
        else if (compP === 'rock' && userP === 'scissors') { 
            return 'loose'; 
        }
        else {
            return 'win';
        }
    }
}   