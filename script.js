'use strict';
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector('.message');

let n = 20;
let random = Math.floor(Math.random()*n)+1;
let score = n;
const number = document.querySelector('.number');

const guess = document.querySelector(".guess");
document.querySelector('.highscore').textContent = localStorage.getItem('high') ?? 0;


checkBtn.addEventListener('click',function(){
    const guessNumber = document.querySelector(".guess").value;
    if(guessNumber === ''){
        message.textContent = 'Please enter a number!';
    }
    else{
        let a = Number(guessNumber);
        console.log(a);
        if(a === random){
            message.textContent = '🌟Congratulations! You won!🏆';
            guess.disabled = true;
            document.body.style.backgroundColor = '#013220';

            localStorage.setItem("high",String(Math.max(score,localStorage.getItem('high'))));
            document.querySelector('.highscore').textContent = localStorage.getItem('high');
        }
        else{
            if(a>random){
                if(Math.abs(a-random) <=3){
                    message.textContent = "Little Higher ";
                }
                else{
                    message.textContent = "Very High ⬆️";
                }
            }
            else{
                if(Math.abs(a-random) <=3){
                    message.textContent = "Little Lower";
                }
                else{
                    message.textContent = "Very Low ⬇️"
                }
          }
          score--;
          console.log(score);
          document.querySelector('.score').textContent = score;
          if(score == 0){
            document.body.style.backgroundColor = "#8b0000";
            }
        }
       
    }

})
againBtn.addEventListener('click',()=>{
    random = Math.floor(Math.random()*n)+1;

    guess.disabled = false;
    n=20;
    score = n;
    document.querySelector('.score').textContent = n;
    document.body.style.backgroundColor = "#222"
    guess.value = '';
    message.textContent = "Start guessing..."
    
})