// This is my age
const myAge = 12;
// This vaule will change
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

//Becasue we already accounted for the first two
let laterYears = myAge - 2;

// To calculate the number of dog years acc..
laterYears *= 4;
console.log(earlyYears,laterYears);

// Adding my two vars toghther
 let myAgeInDogYears = earlyYears + laterYears;


//Using a string method to to lower case my name
 const myName = "Miles".toLowerCase();

//Using strin interpolation to display vaule
console.log(`My name is ${myName}.I am ${myAge} old in human years which is ${myAgeInDogYears} years old in dog years.`);
