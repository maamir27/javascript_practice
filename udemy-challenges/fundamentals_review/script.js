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

// CODING CHALLENGE

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


Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

1, Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.


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


Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

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

Let's go back to Mark and John comparing their BMIs!

Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

*/

const mark = {
  fullName: 'Mark Miller';
  mass: ;
  height:;
  calcBMI: function
}
const john = {
  fullName:;
  mass: ;
  height:;
  calcBMI: function
}
