let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Step 1
let storyWords = story.split(' ')

//Step 2
//console.log(storyWords.length) returns val of 188

/*Creates new betterWords variable - filters storyWords and passes item as a paramater. if a word is in unnecessaryWords then it's not returned to the array
due to the ! before the array name
*/

//Step 3
//Moved to end of code 
//const betterWords = storyWords.filter(item => !unnecessaryWords.includes(item))


//Step 4
/*New function defined above. Loops through each word in array
Count is set to 0
storyWords function loops through each word.
if word in 1st array == word in second array - add to count
output should be each word in array with a count for each
*/
unnecessaryWords.forEach(word =>{
  
  let count = 0
  storyWords.forEach(storyWord =>{
    if (word.toLowerCase() == storyWord.toLowerCase()){
      count++
    }
  })
  console.log(word + ": " + count)
})




//Step 5
/*This was my original attempt at below.
const sentences = storyWords.forEach(sentence => {
  let count = 0
  if (sentence == '!' || '.'){
    count++
  }
  console.log(`There are ${sentence} sentences.`)
})

Would have worked however I didn't have sentence.endsWith('x') and I was calling sentence at the end instead of count. Also needed to return count to be able to log it.

Thanks Skylark for correcting below.

.endsWith is to be used on strings.
*/
const sentences = sentence => {
  let count = 0
  storyWords.forEach(sentence => {
    if(sentence.endsWith('.') || sentence.endsWith('!')){
      count++
      return count
    }
  })
  console.log(`There are ${count} sentences.`)
 
}


//Step 6
console.log(storyWords.length)

sentences()

//moved from top of program
const betterWords = storyWords.filter(item => !unnecessaryWords.includes(item))

//Step 7
console.log(betterWords.join(' '))





