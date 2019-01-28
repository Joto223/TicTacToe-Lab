
// /*----- constants -----*/
var player1= 'X';
var player2= 'O';
var turn= false;
var movesMade= 0;
var square;




// var ctx;
// var turn = 0;
// var winners = new Array();
// var playedComboX = [];
// var playedComboO = [];
// var filledSquares = [0];
// var filled = false;
// var player = "";
// /*----- app's state (variables) -----*/


// /*----- cached element references -----*/

// /*----- event listeners -----*/
document.getElementsByClassName('square').addEventListener('click', move);

// document.getElementsByClassName('cell').addEventListener('click', checkO);
// document.getElementById('gameGrid').addEventListener('click', setBox);
// /*----- functions -----*/
function move() {

  movesMade++;

  if(turn===false){
    event.target.textContent= player1;
    event.target.style.color= 'red';
    turn = true;
  } else {
    event.target.textContent= player2;
    event.target.style.color= 'green';
    turn = false;
  }
};

function winner() {
  if(movesMade > 4){
    let moves= new Array;

    };
  }
