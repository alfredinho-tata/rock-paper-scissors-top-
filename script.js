function getComputerChoice (){
    let num = Math.floor(Math.random() * 3);

    if (num==0) {
        console.log("computer rock");
        return "rock";
    } else if (num==1) {
        console.log("computer paper");
        return "paper";
    } else {
        console.log("computer scissor");
        return "scissor";
        
    }
}

function getHumanChoice(i){
    return i.textContent
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


let rock = document.createElement("button")
let paper = document.createElement("button")
let scissor = document.createElement("button")
let result = document.createElement("div")


rock.textContent="Rock"
paper.textContent="Paper"
scissor.textContent="Scissor"
result.textContent=`Computer score is ${computerScore} || Human score is ${humanScore}`




document.body.appendChild(rock)
document.body.appendChild(paper)
document.body.appendChild(scissor)
document.body.appendChild(result)


const buttons = document.querySelectorAll("button");



buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    playRound(getHumanChoice(button), getComputerChoice());
    result.textContent=`Computer score is ${computerScore} || Human score is ${humanScore}`;
    if (computerScore>=5) {
        alert("Winner is computer")
        //buttons.forEach(button => {button.removeEventListener("click")})
    } else if (humanScore>=5) {
        alert("Winner is human")
        //buttons.forEach(button => {button.removeEventListener("click")})
    }
  });
});









