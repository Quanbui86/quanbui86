const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 39.82
};

// Refactor the code below:

/*const check = checkInventory(order);
check
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray)
    })
    .then((resolvedValueArray) => {
      return shipOrder(resolvedValueArray)
    })
    //.then((successMessage) => {
      //console.log(successMessage)
    //})
    .catch((successMessage) => {
        console.log(successMessage)
      })*/
 //Các hoạt dộng diễn ra tuần tự: checkInventory -> processPayment -> shipOrder
 async function completedOrder(){
        try {
                const step1 = await checkInventory(order);
                const step2 = await processPayment(step1);
                shipOrder(step2);
        } catch(err){
                console.log(err)
        }       
} 
 completedOrder()