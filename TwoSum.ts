///Given an array of integers, return indices of the two numbers such that
// they add up to a specific target.

//pseudo code
//number[]
//function that accepts two arguments, an array and n
//is it a sorted array ? if not, sort it.
// one pointer LEFT and RIGHT from right
// adding LEFT and RIGHT, if it is greater than the SUM , RIGHT --
// if adding LEFT and RIGHT is less than SUM, LEFT ++

//BubbleSort
//using do{}while() later
//nested for loop
// compare and sawp


 function bubbleSort(myArray:number[]):number[]{
    //  let swap:boolean
    //  let temp = 0;
    //        for(let i =myArray.length-1;i>0;i--){
    //             swap = true
    //             for(let j=0;j<i;j++){
    //                 if(myArray[j]>myArray[i]){
    //                     temp=myArray[j];
    //                     myArray[j]=myArray[i];
    //                     myArray[i]=temp;
    //                     swap=false;
    //       }
    //     }// [2,3,4,6,9,1,8,6,5,17,20]
    //     //   j      i
    // }
    // if(swap) return myArray


     let swap: boolean;
     do{
         swap=false

         let temp:number  = 0;
         for(let i:number =0;i<myArray.length;i++){
             if(myArray[i]>myArray[i+1]){
                 temp=myArray[i];
                 myArray[i]=myArray[i+1];
                 myArray[i+1]=temp;
                 swap=true
             }
         }
     }while(swap)
     return myArray;
 }

 function addTwo(arr:number[],n:number){

    let sortedArray :number[]= bubbleSort(arr);
     for(let left:number = 0;left<sortedArray.length;left++){
         for(let right=sortedArray.length-1; right>=0;right--){
             if (sortedArray[left]+sortedArray[right]>n){
                 right--;
             }
             if(sortedArray[left]+sortedArray[right]<n){
                 left++;
             }if(sortedArray[left]+sortedArray[right]===n){
                 return [sortedArray[left],sortedArray[right]];
             }
             else{
                 return undefined
             }
         }
     }



 }
 console.log(addTwo([1,6,4,17,20,3,8,6,5,2,9], 21))
//          i i+1