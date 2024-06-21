// You are given an array of 5 asynchronous functions that perform mathematical operations and return objects.
// Each function has a
// setTimeout to simulate asynchronous behavior. You need to call these functions in a sequence where the
// output of one function determines the next function to call. The sequence starts with the first function in the
// array, and each subsequent function narrows down the data further until the last function is called.
//
//     Each function in the array returns an object with the following structure:


interface Data {
    value: number;
}
//Here are the functions:

//PSEUDO CODE
// returning a promise of array
// receiving Data {value:number}

const asyncFunctions: ((input: Data) => Promise<Data>)[] = [
    async (input: Data) => {
        // @ts-ignore
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ value: input.value * 2 });
            }, 1000);
        });
    },
    async (input: Data) => {
        // @ts-ignore
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ value: input.value + 3 });
            }, 1000);
        });
    },
    async (input: Data) => {
        // @ts-ignore
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ value: input.value - 5 });
            }, 1000);
        });
    },
    async (input: Data) => {
        // @ts-ignore
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ value: input.value / 2 });
            }, 1000);
        });
    },
    async (input: Data) => {
        // @ts-ignore
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ value: input.value * input.value });
            }, 1000);
        });
    }
];
// Your task is to write a function processData that:
//
//     Calls the first function in the asyncFunctions array with an initial input object { value: 10 }.
// Uses the result of each function to determine the next function to call in the array.
//     Continues this process until all functions in the array have been called.
//     Logs the final result.
//     Here's the signature of the processData function:
//
// typescript
// Copy code
// @ts-ignore
async function processData(): Promise<Data> {
    let val:Data = {value: 10};

     for(let fun in asyncFunctions){
          val = await asyncFunctions[fun](val);

     }
        console.log('value:', val)
  //  const value1 = await  asyncFunctions[0](num)
  // const value2 = await asyncFunctions[1](value1)
  //   const value3 = await asyncFunctions[2](value2)
  //   const value4=await asyncFunctions[3](value3)
  //   const value5 =await asyncFunctions[4](value4)
  //   console.log(value5)
    
    // Your implementation here
}

processData()
// processData({value:10}).then(value => console.log(value))