
// function placeBet() {
// 	var = betAmt = 0
// 	while(betAmt<5 || betAmt>10) {
// 		var betAmt = Number(prompt("Place a bet between $5 and $10:"))
// 	}
// 	return betAmt
// };


// function guessNum() {
// 	var guess = 0
// 	while(guess<1 || guess>10) {
// 		var guess = Number(prompt("Choose a number between 1 and 10:"))
// 	}
// 	return guess
// };

// function getRandom() {
// 	return Math.floor((Math.random() * 10) + 1);
// };


// while(bankRoll>0) {
// 	var bet = placeBet()
// 	var playerGuess = guessNum()
// 	var randomNum = getRandom()
// 	if(playerGuess == randomNum) {
// 		bankRoll += bet
// 	} else if(playerGuess+1 == randomNum || playerGuess-1 == randomNum) {
// 		bankRoll = bankRoll
// 	} else {
// 		bankRoll -= bet
// 	}
// 	console.log(bankRoll)
// };



bankRoll = 100;
$(document).ready(function() {
	function getRandom() {
		return Math.floor((Math.random() * 10) + 1);
	};

	$('#form').on('submit', function(event){
		event.preventDefault()
		var betAmt = +$('#bet').val()
		var guess = +$('#guess').val()
		if (bankRoll>0 && betAmt>=5 && betAmt<=10 && guess>=1 && guess<=10) {
			var randomNum = getRandom()
				switch(true) {
					case (guess==randomNum):
						bankRoll = bankRoll + betAmt
						break;
					case (guess+1==randomNum && guess!=randomNum):
					case (guess-1==randomNum && guess!=randomNum):
						bankRoll = bankRoll
						break;
					default:
						bankRoll = bankRoll - betAmt
						break;
				}
		} else if (bankRoll<0) {
			alert("You are broke like michelle")
		} else {
			alert("Please enter the correct value")
		}
		$('#cashamount').text(bankRoll)
	}) 
});


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