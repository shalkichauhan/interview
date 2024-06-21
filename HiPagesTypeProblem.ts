// Sure, let's adjust the example so that we have an array of objects where each object contains an
// asynchronous function. We'll follow a similar pattern where each function is called in sequence, with each one modifying
// the input and passing it to the next. We will also include additional steps to demonstrate mapping and manipulation within the processing flow.
//
//     Here is the implementation:
//
//     ```typescript
// ```
interface Data {
    value: number;
}
//
interface AsyncFunctionObject {
    func: (input: Data) => Promise<Data>;
    description: string; // Added for context in logging
}
//let value1 = asyncFunctionObjects[0].description
//let value2=asyncFunctionObjects[0].func({value:10})
//value3=asyncFunctionObjects[0].func[2]

const asyncFunctionObjects: AsyncFunctionObject[] = [
    {
       // func: async (input: Data) => {
            // @ts-ignore
        func:[2,3,6],
            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve({ value: input.value * 2 });
            //     }, 1000);
            // });
       // },
        description: "Multiply by 2",
    },
    {
        func: async (input: Data) => {
            // @ts-ignore
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ value: input.value + 3 });
                }, 1000);
            });
        },
        description: "Add 3",
    },
    {
        func: async (input: Data) => {
            // @ts-ignore
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ value: input.value - 5 });
                }, 1000);
            });
        },
        description: "Subtract 5",
    },
    {
        func: async (input: Data) => {
            // @ts-ignore
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ value: input.value / 2 });
                }, 1000);
            });
        },
        description: "Divide by 2",
    },
    {
        func: async (input: Data) => {
            // @ts-ignore
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ value: input.value * input.value });
                }, 1000);
            });
        },
        description: "Square the value",
    }
];

// @ts-ignore
async function processData(){


}
processData();
// //
// // ### Explanation:
// //
// //     1. **Data Interface**:
// // The `Data` interface remains the same, defining a structure with a `value` property.
// //
// // 2. **AsyncFunctionObject Interface**:
// // We define an `AsyncFunctionObject` interface that contains:
// //     - `func`: an asynchronous function.
// // - `description`: a string to describe the function, which is useful for logging.
// //
// //      3. **asyncFunctionObjects Array**:
// // This array contains objects that conform to the `AsyncFunctionObject` interface. Each object has an asynchronous function and a description.
// //
// // 4. **processData Function**:
// // - We initialize the `result` variable with the initial input object `{ value: 10 }`.--done
// // - We use a `for` loop to iterate over each object in the `asyncFunctionObjects` array. --done
// // - Before calling the function, we log the current state with the corresponding description. --done
// // - We call the `func` of the current object with the current `result` and await its completion. --done
// // - We update the `result` variable with the output of the current function. --done
// // - After calling the function, we log the updated state with the corresponding description.--done
// // - Finally, we log the final `result`.-- done
// //
// //     This implementation allows you to follow each step of the sequence with clear logging, demonstrating the changes made by each asynchronous function. The added descriptions provide context for each step in the process.