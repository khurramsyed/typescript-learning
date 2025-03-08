const add = (a: number, b: number): number => { return a + b; }

const logMessage = (message: any): void => { console.log(message); }

//another way to define function
let subtract = function (c: number, d: number): number {
    return c - d;
}

// since add and subtract have same signature , i.e. take same parameter types and return same types.
// we can crate a function type

type mathFunction = (a: number, b: number) => number  // Function Type Alias.

// You can write the same thing using interface but it is bit more verbose 
/**
interface mathFunction {
    (a: number , b: number): number
}
*/


// now we can define the funcions using this type 

let mulitply: mathFunction = (a, b) => a * b;
let divide: mathFunction = function (a, b) {
    return a / b;
}

logMessage('Hello !!');
logMessage(add(2, 3));
logMessage(subtract(5, 3));
logMessage(subtract(10, 2));

logMessage(mulitply(2, 3));
logMessage(divide(10, 2));
logMessage(Math.trunc(divide(10, 3)));


//Optional Parameter and default values of a function

// optional parameter Without default value
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}


const sumAll = (a: number = 10, b: number, c: number = 0): number => {
    return a + b + c;
}

// Default Values will not work with the Alias typed functions.
logMessage(sumAll(undefined,3))
logMessage(sumAll(undefined,3,5))

logMessage(addAll(2,5))


// REST OPERATOR PARAMETERs to Funcions

const total = ( ...nums: number[]) : number => {
    return nums.reduce((a , b) => a+b, 0);
};

logMessage(`Total ${total(1,2,3,4)}`)

