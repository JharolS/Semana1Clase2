//let t= true // it's boolean
//let "t"="Teresa" // It's string
//let t=16; //It's number
//let t; //It' undefined
//let t=null; // t is null
//let t={} // It's a object
//let t=[] // t is array

// numbers

//let num1=93;
//let num2=93.00;
//let num3=977e8; //97700000000
//let num4=977e-8 // 0.00000000977
//let num5=9999999999999999999; // 9999999999999999999
//let num6=99999999999999999999; // 10000000000000000000;

//let num7= 5/0 // Infinity 1.797693134862315E+308
//let num8= -5/0 // Infinity -1.797693134862315E+308

//let x = 20/"fish" // NaN

//string

//let singleQuote ='I\'m a single quote';
//let doubleQuote = "I'm a singles quote";

//boolean

//let y= 500>10; //true

//let z= 4<2; // false

//5=5 // true

//500=400 // false

//"Hola"=="Hola" //True
//"1"==1 //True
//"1"===1 //false
//let isStudent = true;

//Arrays
//let arr =["APPLE","PEAR","ORANGE"];
//let arr1 =[1,2,3,4,5];
//let arr2 =[false,true, {number: 1}];

//Objects
//name: value pairs
//let obj={
//    name: "Teresa",
//    age:23,
//    isStudent:true,
//    "name": "Pedro"
//}; 

//let name='Surf' + 5 + 3;//Surf53;

//let number8 = 5+3 + "Surf"; // 8Surf;

let name="Daniel"
console.log("Hola, " + name);
console.log('Hola name');
console.log(`Hola, ${name}`);

let poem ="The wide Ocean";
const author = "Pablo Neruda";

const favesPoemliteral =`My favorite poem is ${poem} by ${author}`
const favesPoem= poem + " by " + author;

console.log(favesPoemliteral);
console.log(favesPoem);

const stringPrimitive = "I'm a staring";
console.log(typeof stringPrimitive);
const stringObject = new String("I'm a string");
console.log(typeof stringObject);
const stringPrimitive1= "       dog cat fish     ";

console.log(stringPrimitive[0]);
console.log(stringPrimitive.charAt(0));
console.log(stringPrimitive.indexOf("a"));
console.log(stringPrimitive.lastIndexOf("a"));
console.log(stringPrimitive.slice(8, 11));
console.log(stringPrimitive.length);
console.log(stringPrimitive.toUpperCase());
console.log(stringPrimitive.toLowerCase());
console.log(stringPrimitive.split(" ", 2));
console.log(stringPrimitive1.trim());

const newString = stringPrimitive1.replace(/dog/gi, "Eagle");
console.log(newString);

//implicit conversion
//subtraction
console.log("15" - "10");
//Modulo
console.log("15"%"10");
//concatenatio
console.log("15"+"10");
console.log(true);
console.log(String(true));
const stringValue= String(49);
const numberExample=49
console.log(typeof stringValue);
console.log(typeof numberExample); 
console.log(numberExample.toString());

const street = " ";
console.log(Number(street));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(2000));
console.log(Boolean(" "));
console.log(Boolean("Hola"));
console.log(Boolean("0"));
var user;
user="Daniel"
var user="Soto";
let username="Daniel"

const sum= () => {
    const sumtotal=10;
    return sumtotal;
}

const age=23;
//Pascal case // Components in React // Class Javascript
const AgeFrom= 23;
// Camel case // Variables / Function in Javascript
const ageFrom=22;
// snake-case // Variables / Functions
// kebak-case // Variables / Functions 

let x = 100;

const car = {
    price:1500,
    color:"red"
}

car.color="blue"

console.log(car);

//Arithemtic Operators
//Addition +
var sum1=5.7
var sum2=10.1
var sumTotal=sum1+sum2
console.log(sumTotal)
//Subtraction -
console.log(10-1)
//Multiplication *
console.log(10*1)

const price= 20.50
const taxRate=0.18

let totalPrice= price + (price * taxRate);
let fixedPrice =totalPrice.toFixed(2); // Convert to string
console.log("Total:", fixedPrice)
//Division /    
console.log(10/2)
//modulo %
console.log("Modulo % 5", 12%5)
console.log("Resto % 5 " -12%5)
//exponentation **
//increment ++
let increment = 7
let prefix = ++increment
console.log(prefix)
//decrement --
let decrement = 7 
let postfix = --decrement
console.log(postfix)
//sufijo
let aa=7
let bb=aa--
console.log(aa)
console.log(bb)
//prefijo
let cc=3
let dd=--cc
console.log(cc)
console.log(dd)

//Assignment Operators
//Assignment
//Addition +=
let carPrice=15000

carPrice +=1000

console.log(carPrice)
// Subtraction -=
// Multiplication *=
// Diviosn /=
// Modulo %=
// Exponentiaton **=

//first multiply , then add

console.log(10+3*5);

//first add , then multiply

console.log((10+3)*5);

//Level of procedence
//Parentheses ()
//Increment ++
//Decrement --
//Exponentiaton **
//Multiplication *
//Division /
//Addition +
//Subtraction -

// {name||key: value (pairs)}

const person={
    name:"Daniel",
    surname:"Soto",
    age:23,
    position: "Developer",
    Salary: 1500,
    isMarried: true,
    children:["Daniel","Soto"],
    location: "Lima",
    greet: function(){
        console.log(`Hola my name is ${this.name}`);
    },
}
// dot notation
console.log(person.name);
// Bracket Notation
console.log(person[`name`]);
person.greet();

person.age=28;
person["age"]=19;

person.coding= function () {
    return `Daniel coding in ${this.location}`
}
delete person.coding;
console.log(person)

for(let key in person) {
    console.log(`${key.toUpperCase()}: ${person[key]}`);
}

const keysPersonValue = Object.keys(person)

console.log(keysPersonValue);

const note = {
    id: 1,
    title: "Title",
    body: "Body",
    date: "20-05-2020",
}

let date= new Date();
//deestructure propierties in to variable
const {id,title,body,date:noteDate} =note;

console.log(noteDate)
let array1=[];
//Literal Object
const dog={}
//Constructor Object
const cat= new Object()
//static method
const horse = Object.create({})

const dog1=dog;
const dog2=dog;
console.log(dog1 === {})

const original={
    hello: "world"
}

// const clone =Object.assign({}, origin)

// console.log(clone === original)
// spread operator

const clone = {...original, hola:"mundo"}

console.log(clone)

function boat(name, color) {
    this.name =name;
    this.color= color||"no color"
    this.created = new Date();
    this.horn = function () {
        console.log(this.name);
    }
}

const sally= new boat("Sally", "blue")
const molly= new boat("Molly")
sally.horn();
console.log(sally)
console.log(molly)

class Person {
    constructor (name, surname){
        this.name=name;
        this.surname=surname;
    }
}

const newPerson = new Person ("Daniel", "Soto");

console.log(newPerson)