// //Object Destructuring 1

// // What does the following code return/print?

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); //8
// console.log(yearNeptuneDiscovered); //1846





// //Object Destructuring 2

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears); //yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659





// //Object Destructuring 3

// function getUserData({ firstName, favoriteColor = "green" }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({ firstName: "Alejandro", favoriteColor: "purple" })
// // Your name is Alejandro and you like purple

// getUserData({ firstName: "Melissa" })
// // Your name is Melissa and you like green

// getUserData({})
// // your name is undefined and you like green





// //ES5 Assigning Variables to Object Properties
// var obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// //ES5 version
// const { a, b } = obj.numbers;






// //ES5 Array Swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// //ES5 version
// [arr[0], arr[1]] = [arr[1]], arr[[0]];





//RaceResults

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });