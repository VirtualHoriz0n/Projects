
//Creates Array called secretMessage
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//logs the length of the array pre-pop
//console.log(secretMessage.length);

//removes the last element of the array
const removed = secretMessage.pop();

//logs the arrays new length post-pop
//console.log(secretMessage.length);

//Pushes the the words 'to' and 'Program' to the last places in the array in the order they are put into the push.
secretMessage.push('to', 'Program');


//replaces the element in the index's 7th position to right
secretMessage[7] = 'right';

//removes the first element of the array - you could set this up in a variable then log the removed work to console.
secretMessage.shift();


//adds the element in '' to the beginning of the array.
secretMessage.unshift('Programming');

//line 29 - 33 index 5 elements of the array to produce their psotions. Was only needed for the .splice so can now be removed.
/*
console.log(secretMessage.indexOf('get'))
console.log(secretMessage.indexOf('right'))
console.log(secretMessage.indexOf('the'))
console.log(secretMessage.indexOf('first'))
console.log(secretMessage.indexOf('time,'))
*/

//replaces elements from index 6 for 5 elements onwards and replaces with single string of 'know'
secretMessage.splice(6,5 , 'know')

//Joins the elements of the array together with ' ' which leaves a space between elements. Then logs to console.
console.log(secretMessage.join(' '))

