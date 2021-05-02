/*The below function gets the users choice which is used in the playGame function.
The function then converts the users input into lowercase so the program can have uniform inputs, reducing lines.
If invalid option is input, system will return error.
 */
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if(userInput === 'rock' || userInput ==='paper' || userInput ==='scissors' || userInput === 'boom') {
      return userInput;
    } else{
      console.log('Error!')
    }
  };
  /*The below function gets the computers choice which is used in the playGame function.
  Random number is generated between 0 and 1 and multipled by 3. Math.floor then rounds the number so it can
  possibly be the following (0,1,2)
  
  Switch statement then uses the rounded number from randomNumber variable to determine computer choice.
   */
  const getComputerChoice = () =>{
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
      case 0:
        return 'rock'
      case 1:
        return 'paper'
      case 2:
        return 'scissors'
    }
  }
  
  
  /*This function determines the winner of the game using the userChoice and computerChoice variables in the playGame function */
  const determineWinner = (userChoice, computerChoice)=>{
    if(userChoice === computerChoice){
      return 'Tie'
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer won'
      } else{
        return 'User won'
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'User won'
      } else if(computerChoice === 'scissors'){
        return 'Computer won'
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'User won'
      } else if(computerChoice === 'rock'){
        return 'Computer won'
      }
    }
    if(userChoice === 'boom'){
      return 'User won'
    }
  }
  
  const playGame = () =>{
    const userChoice = getUserChoice('boom')
    const computerChoice = getComputerChoice()
    console.log('You threw: ' + userChoice)
    console.log('Computer threw: ' + computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  playGame()
  
  
  