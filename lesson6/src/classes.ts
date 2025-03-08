class Coder {
    constructor (
      public readonly name: string,
      private age: number,
      public music: string,
      protected language: string = 'Typescript'       
    ){
        this.name = name;
        this.age = age;
        this.music = music;
        this.language = language;
    }

    public getAge(){
        return `I am ${this.age} old.`
    }

}

let khurram = new Coder('Khurram', 46, 'Junoon')
console.log(khurram.getAge())


class WebDev extends Coder{
    constructor (
        public readonly name: string,
        age: number,
        public music: string,
        public computer: string
    ){
        super(name, age, music);
        this.computer = computer;
    }

}

let alesha = new WebDev("Alesha", 17, "Desi", "Windows Surface");

console.log(alesha)

console.log(`I am ${alesha.name}, I use ${alesha.computer} and I am ${alesha.getAge()}`)



/******************************
 * Interface 
 * ***************************/

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician{
    name: string;
    instrument: string;
    constructor(name: string, instrument : string){
        this.name = name;
        this.instrument= instrument;
    }
    play(action: string): string {
       return `${this.name} ${action} ${this.instrument}`
    }

}


let km = new Guitarist("Khurram", "Guitar");
console.log(km.play("strums"));



///////////////////////////////////

class Peeps{
    static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }
    public id: number;
    constructor(public name: string){
        this.name =name;
        this.id = ++Peeps.count
    }
}

const jon = new Peeps("Jon")
const steve = new Peeps("Steve")
const amy = new Peeps("Amy")

console.log(`Peeps Count = ${Peeps.count}`)
console.log(`Steves Id : ${steve.id}`)

/************************
 * Getters and Setters
 ************************/

class Bands {
    private dataState: string[]
    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every( el => typeof el === 'string')){
            this.dataState = value
            return;
        }else{
            throw new Error(`Param is not a string array`)
        }
    }

}

const junoon = new Bands()
junoon.data = ['Ali Azman', 'Salman Ahmad']
console.log(junoon.data)

junoon.data = [...junoon.data, `The Missing Guitarist`]

console.log(junoon.data)