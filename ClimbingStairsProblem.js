// // fibonacchi series
// function fibonacchi(n:number):number{
//
//        if(n<=2) return 1;
//        return fibonacchi(n-1) + fibonacchi(n-2)
//
// }
// console.log(fibonacchi(7))
// Climbing Stairs: Given n steps, you can climb 1 or 2 steps at a time.
//     How many distinct ways can you climb to the top?
// 1 step  = 1 way = 1
// 2 steps = 1+1   = 2
// 3 steps = 1+ 1+1= 3
// 4 steps = 1+1+1+1=5
//
function Maxways(n) {
    var sum = 0;
    if (n <= 1)
        return 1;
    return sum = (Maxways(n - 1) + Maxways(n - 2));
}
console.log(Maxways(7));
