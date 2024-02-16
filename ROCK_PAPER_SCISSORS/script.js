const computerChoiceDisplay = document.getElementById('computer-choice');
const computerChoiceItem = document.getElementById('computer-item');
const userChoiceItem = document.getElementById('user-item');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('resultDisplay');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let userResult;

const choiceArr = ["./images/paper.png","./images/rock.png","./images/scissors.png"];


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e)=>{
    userChoice = e.target.id;
    userChoiceItem.src = `./images/${userChoice}.png`;
    generateComputerChoice();
}))

function generateComputerChoice(){  

    for(let i = 0 ; i < 3 ; i++){
        for(let i = 0 ; i < 3 ; i++){
            computerChoiceItem.src=choiceArr[i]
        }
    }

        const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
   
        if(randomNumber === 1){
            computerChoice = 'rock'
            computerChoiceItem.src = "./images/rock.png";
        }
        if(randomNumber === 2){
            computerChoice = 'paper'
            computerChoiceItem.src = "./images/paper.png";
        }
        if(randomNumber === 3){
            computerChoice = 'scissors'
            computerChoiceItem.src = "./images/scissors.png";
        }
        getResult();
    }
    
    function getResult(){
        if(computerChoice === userChoice){
            userResult = 'Its a draw'
        }
        if(computerChoice === 'rock' && userChoice === 'paper'){
            userResult = 'You Win!'
        }
        if(computerChoice === 'rock' && userChoice === 'scissors'){
            userResult = 'You lost!'
        }
        if(computerChoice === 'paper' && userChoice === 'rock'){
            userResult = 'You lost!'
        }
        if(computerChoice === 'paper' && userChoice === 'scissors'){
            userResult = 'You win!'
        }
        if(computerChoice === 'scissors' && userChoice === 'rock'){
            userResult = 'You win!'
        }
        if(computerChoice === 'scissors' && userChoice === 'paper'){
            userResult = 'You lost!'
        }
    
        resultDisplay.innerHTML = userResult;
        if(userResult == 'You Win!'){
            resultDisplay.classList.remove('lost')
            resultDisplay.classList.remove('draw')
            resultDisplay.classList.add('win')
        }
        if(userResult == 'You lost!'){
            resultDisplay.classList.remove('win')
            resultDisplay.classList.remove('draw')
            resultDisplay.classList.add('lost')
        }
        if(userResult == 'Its a draw'){
            resultDisplay.classList.remove('lost')
            resultDisplay.classList.remove('win')
            resultDisplay.classList.add('draw')
        }
        
 
}