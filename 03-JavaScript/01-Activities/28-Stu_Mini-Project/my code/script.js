var win = 0
var lose = 0
var tie = 0
//console.log(yourChoice)
alert("Hello! Want to play some RPS?");



var playThegame = function () {

    var yourChoice = prompt("please enter your choice to start! please enter R,P or S", "R")

    var allChoices = ["R", "P", "S"];

    var i = Math.floor(Math.random() * allChoices.length)

    var computerChoice = allChoices[i]

    console.log(computerChoice)

    window.alert("The computer chose " + computerChoice)

    if (yourChoice === computerChoice) {
        window.alert("It is a tie"); tie++
    } else if (
        (yourChoice === "R" && computerChoice === "P") ||
        (yourChoice === "P" && computerChoice === "S") ||
        (yourChoice === "S" && computerChoice === "R")
    ) { window.alert("you lose"); lose++ } else {
        window.alert("you win!"); win++
    }

    window.alert("Score board:" 
        + " \nwins: " + win
        + " \nLosses: " + lose
        + " \nties: " + tie
    )

    var playAgain = confirm("Do you want to play again?")
    if (playAgain === true) { playThegame(); } else { 
        playAgain === false;
       return window.alert("if you want to play again, please refresh this page"); 
    }
}

playThegame();