
//-------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------- SUBJECTIVE QUESTIONS ------------------------------------------------------//

// 1.JSON Objects and Syntax

// interface Person { name: string; age: number; address: { street: string; city: string; }; }

// const jsonString = '{"name":"Alice","age":30,"address":{"street":"123 Main St","city":"Wonderland"}}'; const person: Person = JSON.parse(jsonString);

// QUESTION: Identify and fix any potential issues in the code above.

interface Person {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
}
const jsonString='{"name":"Yousra" , "age":"22" , "address":{"street":"5 d" , "city":"karachi"}}';


const person:Person = JSON.parse(jsonString) as Person; // WE USE as COZ as SAY HUM KHUDH TYPE BATATY HYN IN JSON.

//........................................................................................................................................

// 2.Type Annotations: Write a function that takes two numbers as arguments and returns their sum. Annotate the function parameters and return type using TypeScript.

function addTwoNumbers (a: number , b: number){
    return a+b;
    }
    console.log(addTwoNumbers(3,4))

//........................................................................................................................................

// Type & Assignability Errors

//let x: number; x = "Hello"; QUESTION: What is the error here and how can it be fixed?

// let x: number; // 1st try
// x = 45;
// console.log(x); // output is 45

// let x: string; // 2nd try
// x="Khan";
// console.log(x); // output is Khan

// let x : number | string ; // 3rd try
// x=45;
// x="Khan";
// console.log(x); // output is Khan

//..............................................................................................................................................

//const PI = 3.14; PI = 3.14159;
//QUESTION: What error does this line produce and why?

// const PI = 3.142 ;
// PI = 3.14159; // show error coz constant may redeclaration nhi hoti hy.

//...............................................................................................................................................

// QUESTION:7 How can you validate that the username is not empty before proceeding?

//                                              key points: 
//Jaise hum type, message waghaira properties dete hain inquirer k object m, 
//Waise ek property validate Naam ki use hoti hai , Which takes a function ,
// To validate based on your logic k value empty tou nahi , Aur dusra tareeka ye ho Sakta hai k baad mein hum ek if 
//check Laga den k agar value empty Aaye tou dobara prompt karden
// But that will become complex in long term Kyu k wou if check just ek Baar chalay ga , Tou prompt bhi ek Baar Liya 
//jae ga, Uske sath phir humain loop use karna paray ga which will make our logic too much complex,
//Es liye ye built in property hai validate Naam ki which takes a function jis mein ap apni logic de sakte hai , may it should be an if check,
//K agar value null ho tou dobara prompt Karen that kind of thing.

import inquirer from 'inquirer';

inquirer.prompt([ { 
    type: 'input',
    name: 'username',
    message: 'What is your name?', 
    validate: function(value){
        if(value===''){
            return 'Please enter your username';
        }
        else{
            return true;
        }
    }
    }, 
]).then((answers: { username: any; }) => { console.log(`Hello, ${answers.username}`); });



//......................................................................................................................................................

// QUESTION:8
//Literal Types: Create a function that takes a day of the week (string) as an argument and returns a message depending on the day. Use literal types to represent the possible weekdays.

type weekdays = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY" ;
function daysOfWeek(day: weekdays):string{
    switch(day){
        case "MONDAY":
            return "Today is Monday";
        break;

        case "TUESDAY":
            return "Today is Tuesday";
        break;
        
        case "WEDNESDAY":
            return "Today is Wednesday";
        break;

        case "THURSDAY":
            return "Today is Thursday";
        break;

        case "FRIDAY":
            return "Today is Friday";
        break;

        case "SATURDAY":
            return "Today is Saturday";
        break;

        case "SUNDAY":
            return "Today is Sunday";
        
        default:
            return "Invalid Day";

        
    }
}
console.log(daysOfWeek("FRIDAY")); // friday message print.

//..............................................................................................................


// QUESTION:9
//Structural Typing: Define an type for a product object with propertie i.e id (number), name (string), and price (number). 
//Create a product object that adheres to the above type structure but has additional properties (e.g., description: string).
// Explain how TypeScript uses structural typing to ensure the type of product object conforms to the product object.

//                                                           KEY POINTS

// Ab the thing to notice is, The behavior Pehle wale obj mein Ek property kum thi Lekin hmny Usse jab wou dusra obj assign Kara Jis mein us pehle wale ki sari properties mojud thi Aur ek extra thi tou ussay koi masla nahi hua , 
// Yani ts ne structure k base pe comparison kara That is called structural typing Ab agar ap dusre mein Jo pehle wale ki same properties hn USS mein se ek bhi hata dou error Aaye ga yani 
// Pehle aur dusre ka structure same nahi rahai ga, and in another words,It's like k ek job  k liye ap ja Rahi hon ap.
// Unhon ne 2 requirements rakh thi lekin ap mein ek extra khasiyat hai tou unhain koi masla nahi hoga Yani Jo properties ka structure hoga ussay dekha jae ga jitna required hai wou same hai tou good.
// Extra ajae tou koi masla nahi lekin kum nahi hona chahiye.

type Product =  {
   id : number;
   name : string;
   price : number;
};

let myProduct: Product={
    id : 2,
    name : "iPhone15",
    price : 6000000,
};

type additionalProduct = Product & {
    description: string;
};

let myAdditionalProduct:additionalProduct = {
    id : 2,
    name : "iPhone15",
    price : 6000000,
    description: "This is a new iPhone 15 model.",
};
myProduct = myAdditionalProduct;



// .........................................................................................................................

