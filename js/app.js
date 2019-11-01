
// 1) Define required constants

const 	winCombo = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	  ];


// const player1 = 'X';

// const player2 = 'O';

// 2) Define required variables used to track the state of the game
let board, playerWin, moves, turn

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

let btnSq = document.querySelector('.container');
let mssgEl = document.querySelector('h2');
let btnReset = document.getElementById('reset');
let divs = document.querySelectorAll('div')



// 4) Upon loading the app should:
// 	4.1) Initialize the state variables

// init ();


// 	4.2) Render those values to the page

// render ();

// 	4.3) Wait for the user to click a square

btnSq.addEventListener('click', sqClick)

btnReset.addEventListener('click', init)



// 5) Handle a player clicking a square

// turn

function sqClick(e) {
	console.log(board[e.target.id])
	if(playerWin === 3 || playerWin === -3) return
	if(board[e.target.id] !== 0) return
	
	if (e.target.tagName !== 'DIV') {
	   return; 
	}
	   board[parseInt(e.target.id)] = turn;
	 if (turn === 1) {
		e.target.textContent = 'X'
		// console.log('win )
		
	} else {
		e.target.textContent = 'O'
		
	}
	checkWin();
	turn *= -1;
	moves += 1;
}


//winning condition

function checkWin() {
	for (i=0 ; i< winCombo.length; i++) {
		playerWin = 0;
		   for (index=0 ; index < 3; index++) {
			// let boardIndex = winCombo[i][index];

			 playerWin += board[winCombo[i][index]];
			}
		if (playerWin === 3 || playerWin === -3) {
			if (playerWin === 3) {
				 mssgEl.textContent = 'Player 1 Wins!!!';
				 break;
				//  console.log("p1 Win");
				}	

		else if (playerWin === -3) {
				mssgEl.textContent = 'Player 2 Wins!!!'
				break;
				// console.log('p2 win');
		}	return;	 		
		} else  if (moves === 8) {
				mssgEl.textContent = "It's a Tie"
					
			
		}
	  }	
	}		
			


// 6) Handle a player clicking the replay button


init()

function init () {

	console.log('resets')
	board = [0, 0, 0, 
			0, 0, 0, 
			0, 0, 0];

	turn = 1
	moves = 0
	playerWin = 0

	// delete the e.target text content

	
	divs.forEach(function (e,i){
		e.textContent = "";
	})

	// remove the text on reset

	mssgEl.textContent = "";
	}

