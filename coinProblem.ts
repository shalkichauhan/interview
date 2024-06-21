//Coin Change: Given coins of different denominations and a total amount, compute the fewest number of coins needed.
// 1 2 5 10
// total amount = 6
// 16%10 = 6 , (16-(16%10))/10
// 6%5=1
// 1
// for (let items of array){
//      if (item <n){
//             item ++    }
//      } if(item>n){
//         return
//
//check if the total amount is greater that the largest denomination of the coin,
//let vari = (n-(n%arr[arr.length-1]))/ arr[arr.length-1]


function countZeroes(arr){
    let counter =0
    if(arr[arr.length/2]===1){
    // add whatever parameters you deem necessary - good luck!!!
    for(let i=arr.length/2;i<arr.length;i++){
        if(arr[i]===1){
            continue
        }if(arr[i]===0){
            return i;
        }

    }
    }if(arr[arr.length/2]===0){
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i]===1){
                return (arr.length-i-1)
            }
        }
    }
    return counter

}
console.log(countZeroes([1,1,1,1,0,0,0,0,0,0]))