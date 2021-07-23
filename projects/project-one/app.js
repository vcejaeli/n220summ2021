// alert("welcome to connect 4!");

while (!player) {
    var player1 = prompt('Player One: Enter your name. You will be red.');
};
var player1Color = 'red';

while (!player2) {
    var player2 = prompt('Player Two: Enter your name. You will be yellow.');
};
var player2Color = 'yellow';


//player Class Inheritance    attempt lol
class Players {
    constructor(color, chipAmount) {
        this.color = color;
        this.chipAmount = chipAmount;
    }
}
class YellowPlayer extends Players {
    constructor(color, chipAmount) {
        super(color, yellow);
        super(chipAmount, 21);
    }
}
class RedPlayer extends Players {
    constructor(color, chipAmount) {
        super(color, red);
        super(chipAmount, 21);
    }
}

//encapsulation attempt
class Turns {
    constructor() {
        this.turn = 1;
    }
}

setTurn(newTurn) {
    if(newTurn == 1) {

    }
}





/* dumbed down version

    * tell code to drop color only in svg area  (and fix svg area :/    fixed!)
    * create the chips themselves   --> how, properties, chip(svg?) -> xy properties
    * set rules w/ player turn counter   --> 4 in a row wins in 4 directions --> 3 scenarios {yellow wins, red winds, no one won}  -> how to check what win is. 
    * alert to stop placing chips
    * set chip amounts (21 each) and chip colors (yellow, red)
    
    take SVG size --> anything outside of it ignore



    code variations of program / checkWin function    (break it down)



    ||| need to specify more  |||

    _____
    show that you tried stuff before NOT plagerising but looking to resources. Reflect on takeaway from it, how did it change approach. How did it solve your problems. 
    tried to make connect 4 made 50% didnt know how to do this: watched youtube video saw how to make win condition and this is how it changed my approach and learned from it. 
    -----

    stare out into the clouds more! programming happens in your head.



    for example: create a check win function separately from project, if it works then import it!
*/