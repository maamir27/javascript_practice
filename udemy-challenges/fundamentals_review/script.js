/*let js = "boo";
if (js === 'amazing') alert ('wow youre back');

console.log(40 + 8 + 23 - 10);


// ASSIGNMENT #1

let country = "Pakistan";
let continent = "Asia";
let population = "225.2 million";

console.log(country, continent, population);

const now = 2022;
const ageMalik = now - 1993;
const ageAyda = now - 2021;
console.log(ageMalik, ageAyda);

console.log(now - 1993 > now - 2018);

// CODING CHALLENGE

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


const firstName = "Malik";
const job = "streetworker";
const birthYear = 1993;
const year = 2023;

const introduction =
    "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(introduction);

const introNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(introNew);

const age = 17;

if (age >= 18) {
    console.log(`Malik can start driving lessons!`);
} else {
    const yearsLeft = 18 - age;
    console.log(
        `Malik is not old enough boooo. He must wait another ${yearsLeft} year`
    );
}

const birthYear = 1993;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(
        `Mark's BMI ${markBMI} is higher than that of John's ${johnBMI}`
    );
} else {
    console.log(
        `John's BMI ${johnBMI} is higher than that of Mark's ${markBMI}!`
    );
}

const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 23) {
    console.log(`23 is an excellent number dude`);
} else if (favourite === 27) {
    console.log(`27 is the best number tho`);
} else {
    console.log(`Damn, that's a bad number you just picked`);
}

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

// console.log(hasDriversLicense && hasDriversLicense);
// console.log(hasDriversLicense || hasDriversLicense);
// console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is old enough to drive`);
} else {
    console.log(`Someone else should drive!`);
}

// CODING CHALLENGE #3

// let avgDolphins = (96 + 108 + 89) / 3;
// let avgKoalas = (88 + 91 + 110) / 3;

// console.log(avgDolphins, avgKoalas);

// if (avgDolphins > avgKoalas) {
//     console.log(`Dolphin's won`);
// } else if (avgDolphins === avgKoalas) {
//     console.log(`There was a draw!`);
// } else {
//     console.log(`Koalas won!`);
// }

// BONUS #1

let avgDolphins = (97 + 112 + 101) / 3;
let avgKoalas = (109 + 95 + 123) / 3;

console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(`Dolphin's won`);
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log(`Koalas won!`);
} else if (
    avgDolphins === avgKoalas &&
    avgKoalas >= 100 &&
    avgDolphins >= 100
) {
    console.log(`Both win!`);
} else {
    console.log(`No one wins...`);
}

const day = "monday";

switch (day) {
    case "monday":
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case "tuesday":
        console.log(`Prepare theory videos`);
        break;
    case "wednesday":
    case "thursday":
        console.log(`Write code examples`);
        break;
    case "friday":
        console.log(`Record videos`);
        break;
    case "saturday":
    case "sunday":
        console.log(`Enjoy the weekend!`);
        break;
    default:
        console.log(`Not a valid day!`);
        break;
}

if (day === "monday") {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
    console.log(`Prepare theory videos`);
} else if (day === "wednesday" || day === "thursday") {
    console.log(`Write code examples`);
} else if (day === "friday") {
    console.log(`Record videos`);
} else if (day === "saturday" || day === "sunday") {
    console.log(`Enjoy the weekend!`);
} else {
    console.log(`Not a valid day!`);
}

const age = 27;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// CHALLENGE

const bill = 275;

if (bill >= 50 && bill <= 300) {
    tip = 0.15 * bill;
} else {
    tip = 0.2 * bill;
}
console.log(tip);

const tip2 =
    bill >= 50 && bill <= 300
        ? `The total tip is ${bill * 0.15}`
        : `The total tip is ${bill * 0.2}`;
console.log(tip2);

const calcAverage = (a, b, c) => (a + b + c) / 3

let scoreDolphins = calcAverage(85, 54, 41)
let scoreKoalas = calcAverage(23, 34, 27)
console.log(scoreDolphins, scoreKoalas);

function checkWinner(scoreDolphins, scoreKoalas){
  if (scoreDolphins > scoreKoalas * 2){
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (scoreKoalas > scoreDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas)

TEST DATA: 125, 555, and 44.

// const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20

function calcTip(bill) {
  return (bill >= 50 && bill<= 300) ? bill * 0.15 : bill * 0.20;
}

console.log(calcTip(100));

const bills = [125, 555, 44]
console.log(bills);
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [(bills[0]+tips[0]), (bills[1]+tips[1]), (bills[2]+tips[2])]
console.log(totals);

const person = {
  name: "Mariam",
  birthYear: 1993,
  isStudent: false,
  friends: ['Richenda', 'Alainah', 'Kanita', 'Hassan', 'Shavonne']
  // greet: function() {
  //   console.log("Salam!");
  // }
  calcAge: function(birthYear){
    return 2025 - 1993;
  }
};

console.log(`${person.name} has ${person.friends.length} friends, and his best friend is ${person.friends[0]}.`);

---
OBJECTS CHALLENGE
---
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    return this.bmi = this.mass / (this.height * this. height);
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    return this.bmi = this.mass / (this.height * this.height);
  }
}

john.calcBMI()
mark.calcBMI()

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI(${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s ${john.bmi.toFixed(2)}`);
} else if (john.bmi > mark.bmi){
  console.log(`${john.fullName}'s BMI(${john.bmi.toFixed(2)}) is higher than ${mark.fullName}'s ${mark.bmi.toFixed(2)}`);
}

const person = [
  "Mariam",
  1993,
  false,
  ['Richenda', 'Alainah', 'Kanita', 'Hassan', 'Shavonne']
];

const types = [];

for(let i = 0; i < person.length; i++){
  console.log(person[i]);
  // create a new array to capture the type of the variables above.
  types[i] = typeof person[i];
  // or use the push method
  // types.push(typeof person[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i=0; i < years.length; i++){
  ages.push(2025 - (years[i]));
}

console.log(ages);

const temps = [3, -1, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcAmp = function(temps){
  let max = temps[0];
  let min = temps[0];

  for (let i= 0; i < temps.length ; i++){
    const curTemp = temps[i];

    // if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min
}

const amplitude = calcAmp(temps);
console.log(amplitude);

// FOCUS TIMER REPLICA
// converting minutes worked to hours in string format

const time = [125, 55, 50, 90];

for (let i = 0; i < time.length; i++){
  let hours = Math.floor(time[i] / 60);
  let mints = time[i] % 60;
  console.log(hours, mints);
  console.log(`It's been ${hours} hours and ${mints} minutes.`);
}
*/
