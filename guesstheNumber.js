const randomNumber = Math.floor(Math.random()*100 +1);
const form = document.querySelector('form');
const output = document.querySelector('.output');
const replayButton = document.createElement('button')
let prevGuesses = []
let remainingAttempts = 10;
let gameover = false;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const guessedNumber = parseInt(document.querySelector('#numberInput').value);
    if(!gameover){
        if(validateInput(guessedNumber)){
        // if(guessedNumber<1 || guessedNumber>100 || isNaN(guessedNumber) || guessedNumber ===''){
        //      output.innerHTML= `Invalid number: ${guessedNumber}.\n Guess a number between 1 and 100.`
        // }else{
            remainingAttempts--;
            prevGuesses.push(guessedNumber)
            if(remainingAttempts!=0){
                checkGuess(guessedNumber)
            //     if(guessedNumber>randomNumber){
            //     output.innerHTML = 'Smaller than that!!'
            //     prevGuesses.push(guessedNumber)
            //     document.querySelector('.guesses').innerHTML = prevGuesses
            //     document.querySelector('.remainingAttempt').innerHTML = remainingAttempts;
            // }else if(guessedNumber<randomNumber){
            //     output.innerHTML ='Greater than that!!'
            //     prevGuesses.push(guessedNumber)
            //     document.querySelector('.guesses').innerHTML = prevGuesses
            //     document.querySelector('.remainingAttempt').innerHTML = remainingAttempts;
            // }else{
            //     output.innerHTML = 'Horray!! You are right.'
            // }
            }else{
                dispalyMessage('Game Over');
                gameover = true;
                document.getElementById('subt').disabled = true;
                replay();

            }
            
        }
    }
})

replayButton.addEventListener('click', (e)=>{
    prevGuesses = [];
    remainingAttempts = 10;
    gameover = false;
    document.getElementById('subt').disabled = false;
    dispalyMessage('')
    replayButton.removeChild();
})


function validateInput(guessedNumber){
    if(guessedNumber<1){
         //output.innerHTML= `Invalid number: ${guessedNumber}.\n Guess a number between 1 and 100.`
        alert('Please enter a number more than or equal to 1.')
    }
    else if(guessedNumber>100){
        alert('Please enter a number less than or equal to 100.')
    }else if(isNaN(guessedNumber)){
        alert('Please enter a valid number.')
    }else if(guessedNumber===''){
        alert('Please enter a number.')
    }else{
        return true;
    }
}

function checkGuess(guessedNumber){
    if(guessedNumber>randomNumber){
        dispalyMessage('Smaller than that!!')
    }else if(guessedNumber<randomNumber){
        dispalyMessage('Greater than that!!')
    }else{
        dispalyMessage('Horray!! You are right.')
        document.getElementById('subt').disabled = true;
        replay();
    }
}

function dispalyMessage(message){
    output.innerHTML = message
    document.querySelector('.guesses').innerHTML = prevGuesses
    document.querySelector('.remainingAttempt').innerHTML = remainingAttempts;
}

function replay(){
    replayButton.className = 'restartButton'
    replayButton.innerHTML = 'Replay'
    replayButton.id = 'subt'
    output.appendChild(document.createElement('br'))
    output.appendChild(replayButton)
}