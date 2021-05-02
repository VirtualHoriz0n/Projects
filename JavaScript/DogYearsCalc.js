//NOTE: For step 4/5 - two different methods are used as example to illustrate ways of doing multiplication. 

//Step 1 - Var for user age
let myAge = 19;

//Step 2 - Var for early years
let earlyYears = 2;

//Step 3 - Multiply earlyYears x 10.5
earlyYears *= 10.5;

//Step 4 - Subtract 2 from myAge and create laterYears variable
let laterYears = myAge - 2;

//Step 5 - Multiply laterYears x 4
laterYears = laterYears * 4;

//Step 6 - prints earlyYears/LaterYears
console.log(`${earlyYears} in early years.`);
console.log(`${laterYears} in later years.`);

//Step 7 - add earlyYears and laterYears into myAgeInDogYears variable.
let myAgeInDogYears = earlyYears + laterYears;

//Step 8 - Create myName variable and transform to lowercase. Then log name.
var myName = 'Ethan'.toLowerCase();

console.log(myName)

/*Step 9 - Interpolation with variables to display sentence
Displays myName, myAge and myAgeInDogYears as variables.*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

