function getComputerChoice (max){
    let num = Math.floor(Math.random() * max);

    if (num==0) {
        console.log("rock");
        return "rock";
    } else if (num==1) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissor");
        return "scissor";
        
    }
}

function getHumanChoice(){
    let userInput = prompt("What will you play")
    console.log(userInput)
    return userInput
}




let humanScore = 0
let computerScore = 0







function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == computerChoice ) {
        console.log("Its a tie")
    } else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "paper"){
            console.log("Point Human");
            humanScore+=1;

        } else {
            console.log("Computer point");
            computerScore += 1;
        }
    
    } else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "rock") {
            console.log("Human point");
            humanScore+=1;
        } else {
            computerScore +=1;
            console.log("Computer point");
        }

    } else if (humanChoice.toLowerCase()==="rock") {
        if (computerChoice==="paper") {
            console.log("Computer point");
            computerScore +=1;
        } else {
            console.log("Human point");
            humanScore+=1;
        }

    }

    
    


}


for(i=0; i<2; i++){
    playRound(getHumanChoice(),getComputerChoice());
    console.log(humanScore);
    console.log(computerScore);
}



