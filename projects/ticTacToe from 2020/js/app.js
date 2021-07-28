var elems = document.querySelectorAll('.block');

//trying to connect to the squares
var turn = "X";
var block_everything = false;
var x_moves = [];
var o_moves = [];

//we have to use x and o 
//we will need a variety of if and else statements..
//using the status from html to tell who's turn it is
document.getElementById('status').innerHTML = turn + " turn";

//after lost of coffee, and quite honestly research and aid from my cousin (I understand if I lose 
//pts for getting help. I just didn't want to turn in something that didn't work.. again..), 
//I found a way for this to come together.

//here we will add a way for the whole game to operate
elems.forEach(
    function(elem) {
        //this will make it so that no moves are allowed after a win
        elem.addEventListener('click', function(evt) {
            if(block_everything){
                alert("No more moves allowed!!!");
            }
            else{

                //here we incorporate the svg's I made earlier (for whatever reason the white svg's wouldn't work)
                //the entire time, 'checkwinner' will be running to check for a winner after every move 
                if (!evt.target.classList.contains('blocked')) {
                    if(turn=="X"){
                        evt.target.innerHTML = '<img class="move " src="../img/x_piece.svg" alt=""/>';
                        turn = "O";
                        document.getElementById('status').innerHTML = turn + " turn";
                        x_moves.push(parseInt(evt.target.id));
                        x_moves.sort();
                        checkWinner('x')
                    }
                    else{
                        //we will add the possibilities for the winning 'formulas'
                        evt.target.innerHTML = '<img class="move" src="../img/o_piece.svg" alt=""/>';
                        turn = "X";
                        document.getElementById('status').innerHTML = turn + " turn";
                        o_moves.push(parseInt(evt.target.id));
                        o_moves.sort();
                        checkWinner('o')
                    }
                    
                }
                else{
                    //if a space is taken this will come up to stop it from switching to the other svg
                    alert("You can't make a move here");
                }

                evt.target.classList.add('blocked');
            }

            

        }, true); 
    }
);

//here are all of the possibilities for winning and the arrays
//for both player x and player o

function checkWinner(player){
    var winner=false;
    let array1 = [1,2,3],
        array2 = [1,4,7],
        array3 = [1,5,9];
        array4 = [2,5,8],
        array5 = [4,5,6];
        array6 = [7,8,9],
        array7 = [3,6,9];
        array8 = [3,5,7];

    if(player=="x"){
        
        let checker = (arr, target) => target.every(v => arr.includes(v));
        //here we check for the winner / winning move

        winner = checker(x_moves, array1)
        if(!winner){
            winner = checker(x_moves, array1)
        }
        if(!winner){
            winner = checker(x_moves, array2)
        }
        if(!winner){
            winner = checker(x_moves, array3)
        }
        if(!winner){
            winner = checker(x_moves, array4)
        }
        if(!winner){
            winner = checker(x_moves, array5)
        }
        if(!winner){
            winner = checker(x_moves, array6)
        }
        if(!winner){
            winner = checker(x_moves, array7)
        }
        if(!winner){
            winner = checker(x_moves, array8)
        }
        if(winner){
            alert("X has won!!!!");
            block_everything=true;
        }
        //there is an alert for when player x or player o wins
    }
    //same as before but for player o 
    if(player=="o"){
        
        let checker = (arr, target) => target.every(v => arr.includes(v));

        winner = checker(o_moves, array1)
        if(!winner){
            winner = checker(o_moves, array1)
        }
        if(!winner){
            winner = checker(o_moves, array2)
        }
        if(!winner){
            winner = checker(o_moves, array3)
        }
        if(!winner){
            winner = checker(o_moves, array4)
        }
        if(!winner){
            winner = checker(o_moves, array5)
        }
        if(!winner){
            winner = checker(o_moves, array6)
        }
        if(!winner){
            winner = checker(o_moves, array7)
        }
        if(!winner){
            winner = checker(o_moves, array8)
        }
        if(winner){
            alert("O has won!!!!");
            block_everything=true;
        }
        
    }
    
}