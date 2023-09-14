/*
const team = {
  _players: [
    {firstName: 'Quan',  lastName: 'Bui', age: 35}, 
    {firstName: 'Thao',  lastName: 'Le', age: 33},
    {firstName: 'Chau',  lastName: 'Bui', age: 9}
  ],
  _games: [
    {opponent:'Bull',  teamPoints: 11, opponentPoints: 9}, 
    {opponent:'Cat',  teamPoints: 7, opponentPoints: 11}, 
    {opponent:'Dog',  teamPoints: 11, opponentPoints: 5}, 
  ],
  get players () {
    return this._players
  },
  get games () {
    return this._games
  },
  addPlayer (newFirstName, newLastName, newAge) {
    return player = {
        firstName: newFirstName, lastName: newLastName, age: newAge
        },  
        this.players.push(player)    
    },
  addGame (opponent, teamPoints, opponentPoints) {
    return game = {
      opponent, teamPoints, opponentPoints
      },
      this.games.push(game)
  }
}
team.addPlayer('Uyen', 'Bui', 6)
team.addGame('Bird', 8, 11)
console.log(team.players[2])
console.log(team.games[1])


const {players} = team

console.log(players[3])

const announceThatIAmDoingImportantWork = () => {
  console.log("I’m doing very important work!");
};
const busy = announceThatIAmDoingImportantWork;
busy(); // This function call barely takes any space!


 
const higherOrderFunc = param => {
  //param();
  return console.log(`I just invoked ${param.name} as a callback function!`)
}
 
higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});
*/

/*
const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    } console.log(`wrong name of meal, please insert a name`)
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    } console.log(`wrong price format, please insert a number`)
  },
  get todaySpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}`
    } return 'Meal or price was not set correctly!'
  }
}   
menu.price = '19';
menu.meal = 9 
console.log(menu.todaySpecial)
*/
const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'number' || typeof mealToCheck ==='object' && mealToCheck.every((i) => typeof i === 'string')) {      
      return this._meal = mealToCheck;
    } console.log('insert name of the Meal, not a number');
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number' || typeof priceToCheck ==='object' && priceToCheck.every((i) => typeof i === 'number')) {
      return this._price = priceToCheck
    } console.log('insert price of meal, this is a number');
  },
  todaysSpecial(x) {
    //for (let x = 0; x < this._meal.length; x++) {
      if (this._meal[x-1] && this._price[x-1]) {
        return console.log(`Today’s Special is ${this._meal[x-1]} for $${this._price[x-1]}!`)
      } console.log('Meal or price was not set correctly!')
    //} 
  }
}
menu.meal = ['Ga', 'Ca', 'Heo', 'Bo'];
menu.price = [9, 8, 11, 99];
menu.todaysSpecial(4)

const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
let honorRoll = Object.values(students).filter(student => {
  return student.gpa >= GPA_BENCHMARK;
});
console.log(Object.values(students));
console.log(honorRoll);
function sortYears(x) {
  return x.sort((a, b) => a - b)
}







// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 888, 9, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))