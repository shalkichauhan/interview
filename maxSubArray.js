/*
given a function that accepts an array and a number
find the max sum of n corresponding numbers
use sliding window method

PSEUDOCODE-

function, arr,n
2,4,3,6,7,5 n=3
calculate the sum of first n integers and store in sum
loop over the array, sum - arr[i-1]+arr[i+2]
use Math.max to get the max value of maxSum and sum and
return array
 */

function maxSubArray(arr,n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=arr[i];
    }
   let maxSum=sum;
    for(let item =1;item<arr.length-2;item++){
        sum=sum-arr[item-1]+arr[item+2]
       maxSum= Math.max(sum,maxSum)
    }

return maxSum
}
console.log(maxSubArray([2,4,3,2,7,1],2))