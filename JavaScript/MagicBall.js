//Allows user to input their username
const userName = 'Ethan';

//Pulls userName variable to greet user - if falsy will default to just hello.
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

//User inputs question here.
const userQuestion = 'Am I a human?';

//Prints a copy of the users question - can include user name if given.
userName ? console.log(`${userName} asked the following question; ${userQuestion}`) : console.log(`The user asked the following question; ${userQuestion}`);

//generates a random number between 0 and 1. Then multiplies to 8 (0,1,2,3,4,5,6,7) Then rounds decimal point to whole number.
const randomNumber = Math.floor(Math.random() * 8);

//empty variable to be filled later
let eightBall = '';

//uses number generated by randomNumber to update eightBall stored variable.
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

//prints eightball question
console.log(`Magic Eight Ball says: ${eightBall}`)