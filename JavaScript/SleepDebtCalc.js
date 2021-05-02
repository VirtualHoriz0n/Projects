
//defines hours slept each day - Function is called in getActualSleepHours
const getSleepHours = day => {
    switch(day){
      case "Monday": return 8
      case "Tuesday": return 9
      case "Wednesday": return 6
      case "Thursday": return 7
      case "Friday": return 9
      case "Saturday": return 9
      case "Sunday": return 8
      default: throw "Invalid"
    }
  }
//Below function is an implicit return as function is on one line. No return or {} needed due to this. Arrow Function.
const getActualSleepHours=()=> getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday")


//Function that multiplies the ideal hours by number of days in week (7)
const getIdealSleepHours =(idealHours)=>{
    return idealHours * 7
}

//Original Code - Didn't give hours Under/Over slept.
/* 
const calculateSleepDebt =()=>{
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  if(actualSleepHours === idealSleepHours){
    return 'You got the perfect amount of sleep.'
  } else if(actualSleepHours < idealSleepHours){
    return 'You need more sleep!'
  } else {
    return 'You had more sleep than needed.'
  }
}
*/


//V2 of above comment
/*
const calculateSleepDebt =()=>{
  let sleepCalc = 0
  const idealSleepHours = getIdeal
  if(getActualSleepHours() < getIdealSleepHours()){
    sleepCalc = getIdealSleepHours() - getActualSleepHours()
    return `You should have slept for another ${sleepCalc} hours.`
  } else if(getActualSleepHours() > getIdealSleepHours()){
    sleepCalc = getActualSleepHours() - getIdealSleepHours()
    return `You overslept by ${sleepCalc} hours.`
  }

}*/
/*creates two variables that call their respective functions - hoursSlept variable can be changed by sums later on.  */
const calculateSleepDebt =()=>{
const actualSleepHours = getActualSleepHours()
const idealSleepHours = getIdealSleepHours(8) 
let hoursSlept = 0
if(actualSleepHours < idealSleepHours){
  hoursSlept = idealSleepHours - actualSleepHours
  return `You could have slept for another ${hoursSlept} hours.`
} else if(actualSleepHours > idealSleepHours){
  hoursSlept = actualSleepHours - idealSleepHours
  return `You overslept by ${hoursSlept} hours.`
} else{
  return 'You slept for your ideal amount of hours.'
}
}

console.log(calculateSleepDebt())