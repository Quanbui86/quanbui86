//3 code challenges.
/*
Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

Assume only positive numbers will be given as an argument for the factorial() function. 
*/
const factorial = (x) => {
        n=x
        for (i=1; i<x; i++) {
          n=n*i
        } return n
      }
console.log(factorial(6))
console.log(factorial(7))
/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

const subLength = (para1, para2) => {
        arr = para1.split(para2)
        if (arr.length !== 3){
          return 0
        } return arr[1].length + 2
      }
      
      subLength('funny', 'n'); // returns 2
      subLength('Saturday', 'a'); // returns 6
      subLength('summer', 'm'); // returns 2
      subLength('digitize', 'i'); // returns 0
      subLength('cheesecake', 'k'); // returns 0
      console.log(subLength('funny', 'n'))
      console.log(subLength('Saturday', 'a'))
      console.log(subLength('digitize', 'i'))
      console.log(subLength('inital', 'i'))

/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

*/
const groceries = (arr) => {
        temp = [];
        if (arr.length === 1) {
                temp.push(arr[0].item)
                return `${temp}`
        }else if (arr.length === 2) {
                return `${arr[0].item} and ${arr[1].item}` 
        }
        else {
                for (i=1; i<arr.length-1; i++) {
                        temp.push(' '+arr[i].item)
                }return `${arr[0].item},${temp} and ${arr[arr.length-1].item}`
        }
}

const arr1 = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ;
      // returns 'Carrots, Hummus, Pesto and Rigatoni'
      
const arr2= [{item: 'Bread'}, {item: 'Butter'}] ;
      // returns 'Bread and Butter'
      
const arr3= [{item: 'Cheese Balls'}] ;
      // returns 'Cheese Balls'
      
console.log(groceries(arr3))
console.log(groceries(arr2))
console.log(groceries(arr1))
