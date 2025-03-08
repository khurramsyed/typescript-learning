let stringArray: string[] = ['a', 'b', 'c'];

let guitars :(string | number)[] = ['Strat', 'Les Paul', 5150];

let mixedData: (string | number | boolean)[] = ['EVH', 1984 , true];

stringArray.push('d');

stringArray.unshift('z');

console.log(stringArray);

// Tuples
// Tuples are fixed length arrays where each element has a fixed type.  The order of the elements is important.
// Tuples are defined using square brackets and the type of each element is separated by a comma.
// Tuples can have a maximum of 12 elements.
let myTuple: [string, number, boolean] = ['hello', 10, true];

//Objects
// Objects are collections of key value pairs.  The key is always a string and the value can be any type.
// Objects are defined using curly braces and the key value pairs are separated by a colon.
// The key value pairs are separated by a comma.
let myObj : object;
myObj = []; 
console.log(typeof myObj);
myObj = {};
console.log(typeof myObj);

let exampleObject = {name: 'Maheen', age: 40};



type FamilyMember = {name: string, age: number, form?: string}; 
// By default, all properties of an object are required.  To make a property optional, add a question mark after the property name.
interface InterfaceFamilyMember {name: string, age: number, form?: string| number}; 
// Both are type definitions , you can define either way ... it is a preference whether to use type or interface.
// However note that you can not assign type alias to interface.

let familyMemeber1: FamilyMember = {name: 'Maheen', age: 40};
let familyMemeber2: FamilyMember = {name: 'Alesha', age: 17, form: '12'};
let familyMemeber3: FamilyMember = {name: 'Ayesha', age: 15, form: '10'};

// arrays are also objects
const greetFamilyMember = (familyMember: FamilyMember) => {
   //You can either do this will return place undefined when you form?.toUpperCase() when form is no available (being optional property)
   // return `Hello Family Member ${familyMember.name} , Good that your are form ${familyMember.form?.toUpperCase()}`;
   // or do if else (narrowing)
   if(familyMember.form){
    return `Hello Family Member ${familyMember.name} , Good that your are form ${familyMember.form?.toUpperCase()}`;
   }
   return `Hello Family Member ${familyMember.name}`
}

console.log(greetFamilyMember(familyMemeber1));

//**
// Enums
// Enums are not type level addition of JavaScript but someting add to the language at runtime.


enum Grade{
    U = 1, // By default enum values start at 0 , but we are setting it to 1 so it now starts at 
    D,
    C,
    B,
    A
}


console.log(Grade.U)

/// Literal Types - See it is more like type definition with : and not =
let userName : 'Khurram'
userName = 'Khurram'
// However if we did following then it will be compile time error
// userName = 'Maheen'
// If we want to do that we will have to allow Union values just like Union Type

let userName2 : 'Khurram' | 'Maheen' | 'Alesha' | 'Ayesha' // userName2 Literal Type - Only these values are expected.
userName2 = 'Khurram'
userName2 = 'Ayesha' 

console.log(userName2)
// KEEPS YOUR CODE DRY - DO NOT REPEAT YOURSELF

