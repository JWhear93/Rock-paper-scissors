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
            return "rock wins";
        }
        else if (choice2 === "lizard") {
            return "rock wins";
        }
        else if (choice2 === "spock") {
            return "spock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else if (choice2 === "lizard") {
            return "lizard wins";
        }
        else if (choice2 === "spock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else if (choice2 === "lizard") {
            return "scissors wins";
        }
        else if (choice2 === "spock") {
            return "spock wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "lizard") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else if (choice2 === "paper") {
            return "lizard wins";
        }
        else if (choice2 === "spock") {
            return "lizard wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "spock") {
        if (choice2 === "rock") {
            return "spock wins";
        }
        else if (choice2 === "lizard") {
            return "lizard wins";
        }
        else if (choice2 === "paper") {
            return "paper wins";
        }
        else {
            return "spock wins";
        }
    }
};

console.log(compare(userChoice, computerChoice));