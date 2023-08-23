/* VARIABLES
Review Variables
Nice work! This lesson introduced you to variables, a powerful concept you will use in all your future programming endeavors.

Let’s review what we learned:

Variables hold reusable data in a program and associate it with a name.
Variables are stored in memory.
The var keyword is used in pre-ES6 versions of JS.
let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
Variables that have not been initialized store the primitive data type undefined.
Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
The + operator is used to concatenate strings including string values held in variables.
In ES6, template literals use backticks ` and ${} to interpolate values into a string.
The typeof keyword returns the data type (as a string) of a value. */

/*
console.log(`-----Review Variables-----`)
console.log(` `)

var myPet;
myPet = 'Cat';
let myFood;
myFood = 'Rice';
var myNumber = 977;
const myName = 'TinTin';

console.log(`Thong tin co ban: ` + `${myPet} ${myFood} ${myNumber} ${myName}`);
console.log(`Phan loai: ` + typeof `${myPet} ${myFood} ${myNumber} ${myName}` + `-` + (myNumber + myNumber + myPet.length + ((myNumber + myNumber)) + myFood.length));
console.log(`Do dai: ` + `${myPet} ${myFood} ${myNumber} ${myName}`.length + typeof myName);

console.log(` `)
console.log(`-----Kelvin Weather-----`)
console.log(` `)

//tao bien kelvin co gia tri la 293 do
const kelvin = 0;
//tao bien celius co gia tri nho hon kelvin 273 do
const celius = kelvin - 273;
console.log(`kelvin: ${kelvin}` + `; celius: ${celius}` )
//Tao bien Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celius * (9/5) + 32;
//Lam tron xuong bien fahrenheit.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Tao bien Newton = Celsius * (33/100)
let newton;
newton = celius * (33/100);
//Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);


console.log(` `)
console.log(`-----Dog Years-----`)
console.log(` `)
//Create myAge la so tuoi cua toi
let myAge = 22;
//Create earlyYear
let earlyYear = 2;
//Nhan earlyYear len 10.5 lan
earlyYear *=10.5;
//Create bien laterYear bang cach Giam myAge xuong 2 don vi
let laterYear = myAge - 2;
laterYear *=4.0;
console.log(`${earlyYear} ${laterYear}`);
//tinh tuoi theo dog years
let myAgeInDogYears = earlyYear + laterYear;
//Tao ten voi bien myName2 - chuyen sang viet thuong
const myName2 = `QuanBui`.toLowerCase();
console.log(myName2);
console.log(`My name is ${myName2}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
//Tinh tuoi theo 1 cong thuc duy nhat - voi bien la myAgeInDogYears2
let myAgeInDogYears2 = 2*10.5 + (myAge - 2)*4;
console.log(`My name is ${myName2}. I am ${myAge} years old in human years which is ${myAgeInDogYears2} years old in dog years.`);



console.log(` `)
console.log(`-----Logical Operators-----`)
console.log(`the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!) `)
console.log(`-----`)
let mood = 'sleepy';
let tirednessLevel = 6;
if ((mood === 'sleepy' || tirednessLevel > 8)) {
  console.log('time to sleep - if is "true"');
} else {
    console.log('not bed time yet');
}

if ((mood === 'sleepy' && tirednessLevel > 8)) {
  console.log('time to sleep');
} else {
    console.log('not bed time yet - if is "false" -> run else');
}

if (!(mood === 'sleepy' || tirednessLevel > 8)) {
  console.log('time to sleep');
} else {
    console.log('not bed time yet - if convert from "true" to "false" because of (!) operator -> run else');
}
*/
/*
console.log(` `)
console.log(`-----Truthy and Falsy Assignment-----`)
console.log(` `)
let tool = 'hammer';
let writingUtensil;
if(tool) {
  writingUtensil = tool;
} else {
  writingUtensil = 'pen';
}
console.log(`The ${writingUtensil} is mightier than the sword.`);

// Use short circuit evaluation to assign  writingUtensil variable below:

let tool2 = 'ciss';
let writingUtensil2;
writingUtensil2 = tool2 || 'pen';
console.log(`The ${writingUtensil2} is mightier than the sword 2.`);

console.log(` `)
console.log(`-----switch ~ else if statement-----`)
console.log(` `)

let athleteFinalPosition = 'third place';
switch (athleteFinalPosition) {
  case 'first place' :
  console.log('You get the gold medal!');
  break;
  case 'second place' :
  console.log('You get the silver medal!');
  break;
  case 'third place' :
  console.log('You get the bronze medal!');
  break;
  default :
  console.log('No medal awarded.');
  break;
}
*/

/*
console.log(` `)
console.log(`-----Magic Eight Ball-----`)
console.log(` `)

let userName = 'TinTin';
//Check if userName is truthy or falsy - viet rut gon dung tenary operator ? :
userName ? console.log(`Hello ${userName}!`) : console.log(`Hello!`);
//Tao va in cau hoi
let userQuestion = 'Will I get the job of my dreams?';
console.log (`${userName}'s question: ${userQuestion}`);
//Tao so thap phan ngau nhien tu 0-8 (lam tron xuong)
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
//kiem tra ket qua cua randomNumber - gan ket qua cho eightBall theo tung case cua randomNumber tu 0-8
switch (randomNumber) {
  case 0 : eightBall = 'It is certain';
  break;
  case 1 : eightBall = 'It is decidedly so';
  break;
  case 2 : eightBall = 'Reply hazy try again';
  break;
  case 3 : eightBall = 'Cannot predict now';
  break;
  case 4 : eightBall = 'Do not count on it';
  break;
  case 5 : eightBall = 'My sources say no';
  break;
  case 6 : eightBall = 'Outlook not so good';
  break;
  case 7 : eightBall = 'Signs point to yes';
  break;
  default : eightBall = '';
  break;
}
console.log(`Answer: ${eightBall} ${randomNumber}`);
//-------------------------------------------------------------- 
*/
/*
console.log(` `)
console.log(`-----Race Day-----`)
console.log(` `)

//Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).//


//tao STT
let raceNumber = Math.floor(Math.random() * 1000);
//kiem tra thoi gian dang ki va so tuoi
let registerEarly = true;
let runnerAge = 18;
if (registerEarly === true && runnerAge > 18) {
  raceNumber = raceNumber + 1000;
}

if (registerEarly === true && runnerAge > 18) {
  console.log(`Starting race time : 9:30am. Race number: ${raceNumber}`);
} else if (registerEarly === false && runnerAge > 18) {
  console.log(`Starting race time : 11:00am. Race number: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Starting race time : 12:30am. Race number: ${raceNumber}`);
} else {
  console.log(`see the registration desk`);
}
*/

/*
console.log(` `)
console.log(`-----FUNCTIONS with Arguments-----`)
console.log(` `)
//Khai bao firstName va lastName trong ngoac don.
//firstName va lastName se duoc xem nhu bien so (Variation) trong function
function sayThanks(firstName, lastName) {
  console.log('Thank you for your purchase '+ firstName + lastName + '! We appreciate your business.');
  console.log(`Thank you for your purchase ${firstName} ${lastName}! We appreciate your business.`);
}
//Goi function dong thoi gan gia tri cho 2 bien firstName va lastName
sayThanks('Quan', 'Bui');

//Cach cu dat bien khi chua su dung function
let firstName = 'Quan';
let lastName = 'Bui';
console.log(`Thank you for your purchase ${firstName} `+ lastName + '! We appreciate your business.');

function calculatedArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
    return width * height;  
}
console.log(calculatedArea(-3, 2));
function rectangleArea(width, height) {
  let area = width * height;
  return area;
}
console.log(rectangleArea(5, 3));

console.log(` `)
console.log(`-----Rock, Paper, or Scissors-----`)
console.log(` `)
console.log('hi');
let userChoice;
let computerChoice;  
let randomNumber;
randomNumber = Math.floor(Math.random() * 3);
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'kill all') {
    return userInput;
 } else {
  return console.log('error');
};
};
function getComputerChoice() {
  switch (randomNumber) {
    case 0:  
      return 'rock';
      break;
    case 1:  
      return 'paper';
      break;
    case 2:  
      return 'scissors';
      break;  
  };
  return computerChoice;
};
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won'
    } return 'User won'
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won'
    } return 'User won'
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won'
    } return 'User won'
  }
  if (userChoice === 'kill all')
    return 'User always won, kk.'
  };

  function playGame() {
    userChoice = getUserChoice('paper');
    computerChoice = getComputerChoice()    
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`Result: ${determineWinner(userChoice, computerChoice)}`);
  }
  playGame(); */

 
  console.log(` `)
  console.log(`-----Practice Good Scoping-----`)
  console.log(` `)
  const logSkyColor = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let colorwithdusk = 'pink';
      console.log(colorwithdusk); // Prints "pink"
    }
    console.log(color); // Prints "blue"
  };
  
  logSkyColor();

  const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    };
    console.log(lightWaves);
  };
  logVisibleLightWaves();


