window.console = {
  log: function(str){
	var node = document.createElement("div");
	node.appendChild(document.createTextNode(str));
	document.getElementById("myLog").appendChild(node);
  }
}

var userChoice = prompt("Do you choose rock, paper, scissors, lizard or spock?");
console.log("User: " + userChoice);
var computerChoice = Math.random();
if (computerChoice <= 0.2) {
	computerChoice = "rock";
} else if(computerChoice <= 0.4) {
	computerChoice = "paper";
} else if(computerChoice <= 0.6) {
	computerChoice = "scissors";
} else if(computerChoice <= 0.8) {
	computerChoice = "lizard";
} else {
	computerChoice = "spock";
}
console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock breaks scissors, rock wins";
        }
        else if (choice2 === "lizard") {
            return "Rock crushes lizard, rock wins";
        }
        else if (choice2 === "spock") {
            return "Spock vaporizes rock, spock wins";
        }
        else {
            return "Paper covers rock, paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper covers rock, paper wins";
        }
        else if (choice2 === "lizard") {
            return "Lizard eats paper, lizard wins";
        }
        else if (choice2 === "spock") {
            return "Paper disproves spock, paper wins";
        }
        else {
            return "Scissors cuts paper, scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "Rock breaks scissors, rock wins";
        }
        else if (choice2 === "lizard") {
            return "Scissors decapitates lizard, scissors wins";
        }
        else if (choice2 === "spock") {
            return "Spock smashes scissors, spock wins";
        }
        else {
            return "Scissors cuts paper, scissors wins";
        }
    }
    else if (choice1 === "lizard") {
        if (choice2 === "rock") {
            return "Rock crushes lizard, rock wins";
        }
        else if (choice2 === "paper") {
            return "Lizard eats paper, lizard wins";
        }
        else if (choice2 === "spock") {
            return "Lizard poisons spock, lizard wins";
        }
        else {
            return "Scissors decapitates lizard, scissors wins";
        }
    }
    else if (choice1 === "spock") {
        if (choice2 === "rock") {
            return "Spock vaporizes rock, spock wins";
        }
        else if (choice2 === "lizard") {
            return "Lizard poisons spock, lizard wins";
        }
        else if (choice2 === "paper") {
            return "Paper disproves spock, paper wins";
        }
        else {
            return "Spock smashes scissors, spock wins";
        }
    }
};

console.log(compare(userChoice, computerChoice));