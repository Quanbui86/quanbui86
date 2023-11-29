const array = [5, 5, 6, 78];
function  sum(inputArray) {
        let totalSum = 0;
        
       // for (let i=0; i <= array.length -1; i++) {
       //       total += array[i]
       // }
       totalSum = inputArray.reduce((a,b) => a+b)
        return totalSum
}
console.log(sum(array))