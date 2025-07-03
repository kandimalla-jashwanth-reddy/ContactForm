console.log(myVar);

var myVar=10;
console.log(myVar);

if(true){
    var bvar=20;
    console.log(bvar);
}

console.log(bvar);
var myVar="hello";
console.log(myVar);


let person = {
    firstname: "John",
    lastname:"Doe",
    age:30,
    isStudent:false,
    address: {
        street: "123 Main St",
        city: "Bihar"
    }
};
console.log(person);
console.log(person.firstname);

// === use to check the datatypes 
// == comparison operator

console.log(5 === '5');
console.log(5 == '5');
console.log(2 + '5');
console.log('5' - 2);
console.log(typeof undefined);
console.log(typeof 10n);
console.log(typeof Symbol('foo'));

let x=10;
let y=5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

let temp=25;
if(temp>30){
    console.log("It's hot outside!");
} else if(temp>20) {
    console.log("It's warm and pleasant");
} else{
    console.log("It's bit chilly");
}

let cnt=1;
while(cnt<=3){
    console.log("Count:-",cnt);
    cnt++;
}

const fruits = ["apple","banana","cherry"];
for(const fruit of fruits){
    console.log(fruit);
}

greet("Alice");

function greet(name){
    console.log(`Hello, ${name}!`);
}
greet("Bob");
const fact =function calculate(n) {
    if(n<=1){
        return 1;
    }
    return n*calculate(n-1);
};
console.log(fact(5));

const add=(a,b) => {
    return a+b;
};

const multiply = (a,b) => a*b;
