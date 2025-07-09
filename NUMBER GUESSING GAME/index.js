const minNum = 1;
const maxNum = 100;
const result = Math.floor(Math.random() * maxNum - minNum + 1) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Enter the number between ${minNum} - ${maxNum}`);
    if(isNaN(guess)){
        window.alert(`please enter a valid number!!`);
    }else if(guess < minNum || guess > maxNum){
        window.alert(`please enter a valid number!!`);
    }else
    attempts++;
    if(guess > result){
        window.alert(`TOO HIGH!! try again`);
    }else if(guess < result){
        window.alert(`TOO LOW!! try again`);
    }else{
        window.alert(`CORRECT! Your answer is ${result} & It took you ${attempts} attempts`);
        running = false;
    }
}
