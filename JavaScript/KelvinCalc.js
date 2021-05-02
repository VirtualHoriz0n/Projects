//Constant Variable for temperature of Kelvin
const kelvin = 280

//Removes 273 from Kelvin variable
var celsius = kelvin - 273

//performs calculation for celsius to farenheit
let farenheit = celsius * (9/5) + 32

//Takes the farenheit variable and rounds to whole number
farenheit = Math.floor(farenheit)

//Stores Newton calculation in 
let newton = celsius * (33/100)

//Takes the newton variable and rounds to whole number
newton = Math.floor(newton)



//prints farenheit
console.log(`The temperate is ${farenheit} degress Fagrenheit.`)

//prints newton
console.log(`The weather is equal to ${newton} Newtons.`)

//prints celsius
console.log(`The temperate is ${celsius} degrees Celcius.`)
