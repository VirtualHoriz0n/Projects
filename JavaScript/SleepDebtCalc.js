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


const getIdealSleepHours =()=>{
    const idealHours = 9
    return idealHours * 7
}

//Working function below DO NOT DELETE UNLESS STEP 10 COMPLETE
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


