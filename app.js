/*let x = 5, y = 10;
let sum = x + y;
console.log(sum);
const answer = promt('List numbers');
const taskArr = answer.split(',');
let result = answer === 'false' ? alert("Im not here") : alert("Im here")*/

/*const isOK =  prompt('Is this ok?(yes|no)');
const lowerCaseOk = isOK != null ? isOK.toLowerCase() : isOK;
let result;
switch(isOK){
  case'':
  case 'yes':
  case 'y':
    result = true;
    break;
  case 'n':
  case 'no':
  case null:
    result = false;
    break;
  default:
    result = undefined;
}

console.log(result);*/

/*const box = document.querySelector('.box');
box.style.marginLeft = '0px';

const maxMargin = 200;
let currentMargin = 0;
//for(i=0;i<4;i++){
do{
  ++currentMargin;
   requestAnimationFrame(() => {
    box.style.marginLeft = `${currentMargin}px`; 
   });
} while(currentMargin < 201);*/


//};
let randomNum =  Math.round(Math.random()*5);
console.log(randomNum);
do{
  guess = prompt('Guess the number');
}while(Number(guess) !== randomNum && guess !==null);