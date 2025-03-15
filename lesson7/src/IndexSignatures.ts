/**
 * Index Signatures are useful when you know the shape of the object , but not thier names
 * Type required index signature when you attempt to access an object property dynamically.
 */


// interface TrascationObj{
//     Pizza: number,
//     Books: number,
//     Job: number
// }

const todaysTransaction: TrascationObj = {
    Pizza: 10,
    Books: 0,
    Job: 50
}


console.log(todaysTransaction.Pizza)
console.log(todaysTransaction['Pizza'])

let prop = 'Pizza'
//console.log(todaysTransaction[prop]) //ERROR

interface TrascationObj {  // This is index signature
    [index: string]: number // All the key are string and the values are number.
}

const todaysNet = (transcations: TrascationObj): number => {
    let total = 0;
    for( const txn in transcations){
        total += transcations[txn]  // With TranscactionObj this was failing and we need interface signature.
    }
    return total;
}

console.log(todaysNet(todaysTransaction));


interface Student {
    [key: string]: string| number| number[]| undefined

    name: string,
    GPA: number,
    classes?: number[]
}

const student : Student = {
    name: "Khurram",
    GPA: 4,
    classes: [100, 200],
    dumbo: "you" // This should not be allowed but is allwed becuase of interface signature this is typescript
                // , you can improve this by removing interface signature but to  access fields dynamically you need to use keyof and type of.
}

for (let  key in student){
    console.log(`${key} = ${student[key]}`) 
}


interface Teacher {
    name: string,
    age: number,
    classes?: number[] 
}

const teacher : Teacher = { name: 'Khurram', age: 45, classes: [100,200] }

for( const key in teacher){
    console.log(` ${key} : ${teacher[key as keyof Teacher]}`)
}


//// HOW TO Avoid this signature issue , you are saying keyof typeof to get the type of object , rather than using class/interface name/.
Object.keys(teacher).map( key => {console.log (teacher[key as keyof typeof teacher])} ) // Assume that we do not know the type of teacher object , we can use keyof typeof object

const logStudentKey = (student: Student, key: keyof Student) : void => {
    console.log( `Student ${key} : ${student[key]}`)
}

logStudentKey(student, 'GPA')