//Whale Talk project demonstrating loops in JS

//Enters a string to be translated
const input = "I am a human from earth"

//Array of all vowels exlcluding Y (Whales don't use Y)
const vowels = ['a', 'e', 'i', 'o', 'u']

//Blank array we can update with our translation
let resultArray = []

//When this loop is run, logs from 0 to the last character of the input in numerics.
for(let inputIndex = 0; inputIndex < input.length; inputIndex++){
    
    //When this loop is run, each character in input runs through the vowel array
    for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
        //This if statement checks if characters in the input match the elements in array
        /*From Skylark on discord;
        A string is basically just an array of characters that are just formatted in a nice way with some methods
        
        Meaning that you can do input[i] to get the element out of the array*/
        if(input[inputIndex] === vowels[vowelIndex]){
            //checks if the input is an e and pushes ee to the array (Whales have longer e's)
            if(input[inputIndex] === 'e'){
                resultArray.push('ee')
            }
            //else checks if the input is an u and pushes uu to the array (Whales have longer u's)

            else if(input[inputIndex] === 'u'){
            resultArray.push('uu')
        }
        //else pushes the vowel to the array using the element from the inputIndex variable
        else{
            resultArray.push(input[inputIndex])
            }
        }
    }
}
//Logs the resultArray and joins all elements together with a space (' ') and converts it to uppercase.
console.log(resultArray.join('').toUpperCase());
