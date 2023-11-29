const arr = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11']
/*
const total = arr.reduce((total, amount) => total + amount)
console.log(total)
const ave = total / (arr.length -1)
console.log(ave)
*/
const ave = arr.reduce((total, amount, index, array) => {
        total += amount;
        if (index === array.length - 1) {
                return total/array.length;
        } else {
                return total;
        }
});
const shuffle = (arr) => {
        shuffleArr = [];
        shuffleArr2 = ['s1'];
        arrLength = arr.length;
        count = 0;
        count2 = 0;
        /*while (shuffleArr.length < arrLength) {
                count +=1;
                random = Math.floor(Math.random() * arrLength)
                if (!shuffleArr.includes(arr[random])){
                shuffleArr.push(arr[random])
                }
        }*/
        /*while (shuffleArr2.length < arrLength) {
                count2 +=1;
                random = Math.floor(Math.random() * arrLength)
                if (!shuffleArr2.some((element) => arr[random] === element)){
                shuffleArr2.push(arr[random])
                }
        }*/
        //for (i=1; i<arr.length; i++) {
        
                
                
        do {
                count2 +=1;
                random = Math.floor(Math.random() * arrLength)
                if (shuffleArr2.some((element) => element === arr[random]) === false){
                        shuffleArr2.push(arr[random])
                        
                } else {
                        console.log(random)
                }
        } while (shuffleArr2.length < arrLength);
}
shuffle(arr)
console.log(shuffleArr)
console.log(count)
console.log(shuffleArr2)
console.log(count2)