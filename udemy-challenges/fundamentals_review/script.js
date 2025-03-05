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

*/
