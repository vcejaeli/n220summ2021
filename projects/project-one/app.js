var elems = document.querySelectorAll('.board-circle');
output = document.querySelector("output");
// var elems = document.getElementsByClassName('.board-circle');
//connecting (or trying to) the circle elements 
var turn = "T";
var block_everything = false;
var r_moves = [];
var y_moves = [];

//r_moves represents red | y_moves reps yellow
//block_everything stops from playing more chips
//turn helps tracks turns


//how do we place down chips?       


// 26 28


//room for error with 'blocked' @25 @28 @33
document.getElementById('status').innerHTML = turn + " turn";

//here we will add a way for the whole game to operate
elems.forEach(
    function(output) {
        //this stops moves after a win is registered
        output.addEventListener('click', function(evt) {
            if(block_everything) {
                alert("No more moves allowed!");
            }
            else { 
                //here we target the svg id's from html and run checkWin
                if (!evt.target.classList.contains('blocked')) {
                    if(turn=="T") {
                        evt.target.innerHTML = '<svg id="yellowChip "/>';
                        turn = "Y";
                        document.getElementById('status').innerHTML = turn + " turn";
                        y_moves.push(parseInt(evt.target.id));
                        y_moves.sort();
                        checkWin('y');
                    }
                    else {
                        evt.target.innerHTML = '<svg id="redChip "/>';
                        turn = "R";
                        document.getElementById('status').innerHTML = turn + " turn";
                        r_moves.push(parseInt(evt.target.id));
                        r_moves.sort();
                        checkWin('r');
                    }
                }
                else {
                    //this stops a move on a taken space
                    alert("You can't place a chip here");
                }
                evt.target.classList.add('blocked');
            }
        }, true);
    }
);

//here we will check for the winner using a set of arrays with our id's from td
function checkWin(player) {
    // var winner = false;

    //all wins for 11
    let array1 = [11,12,13,14];
    let array2 = [11,21,31,41];
    let array3 = [11,22,33,44];
    //all wins for 12
    let array4 = [12,13,14,15];
    let array5 = [12,22,32,42];
    let array6 = [12,23,34,45];
    //all wins for 13
    let array7 = [13,14,15,16];
    let array8 = [13,23,33,43];
    let array9 = [13,24,35,46];
    //all wins for 14
    let array10  =[14,15,16,17];
    let array11  =[14,24,34,44];
    let array12  =[14,23,32,41];
    let array13  =[14,25,36,47];
    //all wins for 15
    let array14  =[15,25,35,45];
    let array15  =[15,24,33,42];
    //all wins for 16
    let array16  =[16,26,36,46];
    let array17  =[16,25,34,43];
    //all wins for 17
    let array18  =[17,27,37,47];
    let array19  =[17,26,35,44];
    //all wins for 21
    let array20  =[21,22,23,24];
    let array21  =[21,32,43,54];
    //all wins for 22
    let array22  =[22,23,24,25];
    let array23  =[22,32,42,52];
    let array24  =[22,33,44,55];
    //all wins for 23
    let array25  =[23,24,25,26];
    let array26  =[23,33,43,53];
    let array27  =[23,34,45,56];
    //all wins for 24
    let array28  =[24,25,26,27];
    let array29  =[24,34,44,54];
    let array30  =[24,35,46,57];
    let array31  =[24,33,42,51];
    //all wins for 25
    let array32  =[25,35,45,55];
    let array33  =[25,34,43,52];
    //all wins for 26
    let array34  =[26,36,46,56];
    let array35  =[26,35,44,53];
    //all wins for 27
    let array36  =[27,37,47,57];
    let array37  =[27,36,45,54];
    //all wins for 31
    let array38  =[31,32,33,34];
    let array39  =[31,41,51,61];
    let array40  =[31,42,53,64];
    //all wins for 32
    let array41 = [32,33,34,35];
    let array42 = [32,42,52,62];
    let array43 = [32,43,54,65];
    //all wins for 33
    let array44 = [33,34,35,36];
    let array45 = [33,43,53,63];
    let array46 = [33,44,55,66];
    //all wins for 34
    let array47 = [34,35,36,37];
    let array48 = [34,44,54,64];
    let array49 = [34,45,56,67];
    let array50 = [34,43,52,61];
    //all wins for 35
    let array51 = [35,45,55,65];
    let array52 = [35,44,53,62];
    //all wins for 36
    let array53 = [36,46,56,66];
    let array54 = [36,45,54,63];
    //all wins for 37
    let array55 = [37,47,57,67];
    let array56 = [37,46,55,64];
    //all wins for 41
    let array57 = [41,42,43,44];
    //all wins for 42
    let array58 = [42,43,44,45];
    //all wins for 43
    let array59 = [43,44,45,46];
    //all wins for 44
    let array60 = [44,45,46,47];
    //repeat wins for 45-47
    //all wins for 51
    let array61 = [51,52,53,54];
    //all wins for 52
    let array62 = [52,53,54,55];
    //all wins for 53
    let array63 = [53,54,55,56];
    //all wins for 54
    let array64 = [54,55,56,57];
    //repeat 55-57
    //all wins for 61
    let array65 = [61,62,63,64];
    //all wins for 62
    let array66 = [62,63,64,65];
    //all wins for 63
    let array67 = [63,64,65,66];
    //all wins for 64
    let array68 = [64,65,66,67];
    //repeat wins for 65-67

    if(player=='r') {
        let checker = (arr, target) => target.every(v => arr.includes(v));
        //here we check for winning move

        winner = checker(r_moves, array1)
        //do I really need to write this 68 times... 
        if(!winner) {
            winner = checker(r_moves,array1,array2,array3,array4,array5,
                array6,array7,array8,array9,array10,array11,array12,array13,
                array14,array15,array16,array17,array18,array19,array20,array21,
                array22,array23,array24,array25,array26,array27,array28,array29,
                array30,array31,array32,array33,array34,array35,array36,array37,
                array38,array39,array40,array41,array42,array43,array44,array45,
                array46,array47,array48,array49,array50,array51,array52,array53,
                array54,array55,array56,array57,array58,array59,array60,array61,
                array62,array63,array64,array65,array66,array67,array68)
        }
        if(winner) {
            alert("RED WINS!");
            block_everything=true;
        }
        //alert for when red wins
    }
    //now for yellow
    if(player=="y") {
        let checker = (arr, target) => target.every(v => arr.includes(v));

        winner = checker(y_moves, array1)
        //do I really need to write this 68 times... 
        if(!winner) {
            winner = checker(y_moves,array1,array2,array3,array4,array5,
                array6,array7,array8,array9,array10,array11,array12,array13,
                array14,array15,array16,array17,array18,array19,array20,array21,
                array22,array23,array24,array25,array26,array27,array28,array29,
                array30,array31,array32,array33,array34,array35,array36,array37,
                array38,array39,array40,array41,array42,array43,array44,array45,
                array46,array47,array48,array49,array50,array51,array52,array53,
                array54,array55,array56,array57,array58,array59,array60,array61,
                array62,array63,array64,array65,array66,array67,array68)
        }
        if(winner) {
            alert("YELLOW WINS!");
            block_everything=true;
        }
    }
}






// alert("welcome to connect 4!");
// while (!player) {
//     var player1 = prompt('Player One: Enter your name. You will be red.');
// };
// var player1Color = 'red';

// while (!player2) {
//     var player2 = prompt('Player Two: Enter your name. You will be yellow.');
// };
// var player2Color = 'yellow';


//here is where I tell js what players we have and how many chips each of them get.
class Players {
    constructor(color, chipAmount) {
        this.color = color;
        this.chipAmount = chipAmount;
    }
}
class y_moves extends Players {
    constructor(color, chipAmount) {
        super(color, yellow);
        super(chipAmount, 21);
    }
}
class r_moves extends Players {
    constructor(color, chipAmount) {
        super(color, red);
        super(chipAmount, 21);
    }
}


//player Class Inheritance    attempt lol
// class Players {
//     constructor(color, chipAmount) {
//         this.color = color;
//         this.chipAmount = chipAmount;
//     }
// }
// class YellowPlayer extends Players {
//     constructor(color, chipAmount) {
//         super(color, yellow);
//         super(chipAmount, 21);
//     }
// }
// class RedPlayer extends Players {
//     constructor(color, chipAmount) {
//         super(color, red);
//         super(chipAmount, 21);
//     }
// }

// //encapsulation attempt
// class Turns {
//     constructor() {
//         this.turn = 1;
//     }
// }

// setTurn(newTurn) {
//     if(newTurn == 1) {

//     }
// }





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
    show that you tried stuff before NOT plagerising but looking to resources. 
    Reflect on takeaway from it, how did it change approach. How did it solve your problems. 
    tried to make connect 4 made 50% didnt know how to do this: watched youtube video saw 
    how to make win condition and this is how it changed my approach and learned from it. 
    -----

    stare out into the clouds more! programming happens in your head.



    for example: create a check win function separately from project, if it works then import it!
*/