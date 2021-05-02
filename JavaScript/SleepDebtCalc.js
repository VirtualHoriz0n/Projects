
//defines hours slept each day - Function is called in getActualSleepHours
const getSleepHours = day => {
    switch(day){
      case "Monday": return 8
      case "Tuesday": return 9
      case "Wednesday": return 6
      case "Thursday": return 7
      case "Friday": return 7
      case "Saturday": return 9
      case "Sunday": return 7
      default: throw "Invalid"
    }
  }
//Below function is an implicit return as function is on one line. No return or {} needed due to this. Arrow Function.
const getActualSleepHours=()=> getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday")


//Function that multiplies the ideal hours by number of days in week (7)
const getIdealSleepHours =()=>{
    const idealHours = 7
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


//let sleepCalc allows variable to be changed - if statement then checks if Actual < ideal - if so subtracts actual from ideal.    If actual > ideal - subtracts ideal from actual. Both sums update sleepCalc variable.
const calculateSleepDebt =()=>{
  let sleepCalc = 0
  
  if(getActualSleepHours() < getIdealSleepHours()){
    sleepCalc = getIdealSleepHours() - getActualSleepHours()
    return `You should have slept for another ${sleepCalc} hours.`
  } else if(getActualSleepHours() > getIdealSleepHours()){
    sleepCalc = getActualSleepHours() - getIdealSleepHours()
    return `You overslept by ${sleepCalc} hours.`
  }

}

console.log(calculateSleepDebt())