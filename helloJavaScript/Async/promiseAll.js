const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.')
const checkPants = checkAvailability('pants', 'Favorite Supply Co.')
const checkBags = checkAvailability('bags', 'Favorite Supply Co.')
/*
Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject)*/
//Các hoạt động diễn ra song song nên ta cho chạy cùng lúc không phụ thuộc vào nhau.
async function checkAllfun(){
        try {
               const checkAll = await Promise.all([checkSunglasses, checkPants, checkBags])
               onFulfill(checkAll)
        } catch(err){
                console.log(err)
        }
        
}
checkAllfun()
