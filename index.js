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