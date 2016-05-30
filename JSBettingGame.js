//Setting the inital bank roll value
var bankRoll = 100;

//Function for user to place bet
function placeBet() {
	var betAmt = 0
	while(betAmt<5 || betAmt>10) {
		var betAmt = Number(prompt("Place a bet between $5 and $10:"))
	}
	return betAmt
};

//Function for user to guess number
function guessNum() {
	var guess = 0
	while(guess<1 || guess>10) {
		var guess = Number(prompt("Choose a number between 1 and 10:"))
	}
	return guess
};

//Function for random number
function getRandom() {
	return Math.floor((Math.random() * 10) + 1);
};


while(bankRoll>0) {
	var bet = placeBet()
	var playerGuess = guessNum()
	var randomNum = getRandom()
	if(playerGuess == randomNum) {
		bankRoll += bet
	} else if(playerGuess+1 == randomNum || playerGuess-1 == randomNum) {
		bankRoll = bankRoll
	} else {
		bankRoll -= bet
	}
	console.log(bankRoll)
};


// switch(fucntion) {
// 	case(num === gameNum):
// 	break;
// 	case(num === gameNum+1):
// 	case(num === guessNum-1);
// 	break;
// 	case(num != gameNum);
// 	case(num != gameNum+1);
// 	case(num != guessNum-1);
// 	break;
// }