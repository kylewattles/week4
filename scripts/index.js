// alert("it's working!")
alert ("!!!RUSSIA HAS LAUNCHED AN INTERCONTINENTAL BALLISTIC MISSILE HEADING TOWARDS THE WESTERN UNITED STATES\nTAKE COVER IMMEDIATELY!!! \nTHIS IS NOT A DRILL!!!");
console.log("Week 4 project js app...");




//declares a variable with a string data type
/*
Data Types and Structures

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

*/
let abc123xyz;
let something
console.log("What is this???", abc123xyz);
console.log(
    //whatever you want to see
    something
);


function FakeGoogleServer(){
    return "Kyle Wattles"
}

//getting data from the cloud...
abc123xyz=FakeGoogleServer()

console.log("This is my name:",typeof abc123xyz);


let isItCold=true

let kyle = 28
kyle=29
console.log (kyle);

let amountOfGuests = 12
let amountOfDrinks = 8
let enoughDrinks = amountOfDrinks >= amountOfGuests
let goToTheStore = 4
enoughDrinks = amountOfDrinks + goToTheStore >= amountOfGuests
console.log(enoughDrinks);

/*practicing loops*/
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

console.log('whatever is next');

for (let i = 0; i <= 20; i++) {
   if(i % 2 == 0) {
    console.log(i);
   }
}

let names = ['kyle', 'gabby', 'khayman'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}

let a = 0

while (a < 10) {
   console.log(a);
   a++;
    
}

do {
    console.log(a);
} while (a < 10)

    for (i in names) {
        console.log(i);
        
    }

    for (name of names) {
        console.log(name);
    }

