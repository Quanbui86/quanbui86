const Calculate = {
  factorial(num){
        if ((typeof num != 'number')) {                
                throw new TypeError('insert a number')
        }
        let factorialNum = 1;
        for (let i=num; i>0; i--) {
                factorialNum *=i
        }
        return  factorialNum
        
  }
}

module.exports = Calculate;
/*const readline = require('readline');

function factorial(num) {
  // Kiểm tra xem num có được xác định hay không
  if (typeof num === 'undefined') {
    return 'Error: No input';
  }

  // Kiểm tra xem num có phải là một số nguyên không âm hay không
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    return 'Error: Input must be a non-negative integer';
  }

  // Tính giai thừa
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a non-negative integer: ', (userinput) => {
  userinput = parseInt(userinput);

  if (isNaN(userinput) || userinput < 0 || !Number.isInteger(userinput)) {
    console.log('Error: Input must be a non-negative integer');
  } else {
    const num2 = factorial(userinput);
    console.log(num2);
  }

  rl.close();
});*/
      
      
const shopForBeans = () => {
        return new Promise((resolve, reject) => {
          const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
          setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * beanTypes.length);
            let beanType = beanTypes[randomIndex];
            console.log(`2. I bought ${beanType} beans because they were on sale.`);
            resolve(beanType);
          }, 1000);
        });
      }
       
      async function getBeans() {
        console.log(`1. Heading to the store to buy beans...`);
        let value = await shopForBeans();
        console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
      }
       
      getBeans();
      

      let prom = new Promise((resolve, reject) => {
        let num = Math.random();
        if (num < .5 ){
          resolve('Yay!');
        } else {
          reject('Ohhh noooo!');
        }
      });
      
      const resolve = (a) => {
        console.log('resolve ' + a);
      };
      
      const reject = (b) => {
        console.log('reject ' + b);
      };
      
      prom.then(resolve, resolve);