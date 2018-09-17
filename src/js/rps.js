
function Rps() {
    this.pick = (userP, compP) => {

        if (userP === compP)
            return 'even';
        else 
            return 'wins';
    }
}   
