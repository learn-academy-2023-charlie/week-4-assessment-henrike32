// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe( rColors, () => {
  it("returns a gencolor sequence", () => {
    expect(colors1).toEqual(expect.arrayContaining("yellow", "blue", "pink", "green"));
    expect(colors2).toEqual(expect.arrayContaining("chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"));
  });
})
//  ReferenceError: randomColors is not defined✅
// b) Create the function that makes the test pass.

// pseudocode ->
// input -> array of colors as values
// output -> an array of random colors
// process ->
// create a function named rColors which will take in an array.
// using the .shift method we can remove the first value of the given array
// iterating through the array,in reverse order using the .length - 1 
// using the decrement operator you can iterate through the remaining values of the array
// adding the j variable you are generating a random index within the range of 0 and i
// swapping elements at index j with index i using the [arr[i], arr[j] = [arr[j], arr[i]];
// returning the shuffled array
// Option 1:
function rColors(arr) {
  arr.shift();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const colors1 = ["purple", "blue", "green", "yellow", "pink"];
//Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]✅
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];
//Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]✅

// Option 2 from the explanations with Chris/Scott:

// describe('shuffler', () => {
//   it('takes in an array , return the first item from the array shuffles the remaining content') => {
//     const colors1 = ["purple", "blue", "green", "yellow", "pink"];
//     //Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]✅
//     const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];
//     //Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]✅
//     expect(colors1).toEqual(expect.arrayContaining("yellow", "blue", "pink", "green"));
//     expect(colors2).toEqual(expect.arrayContaining("chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"));
//   })
// })
// const shuffler = (array) => {
//   return array.slice(1).sort(() => Math.random() - 0.5)
// }

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe('votesCount', () => {
  it('returns the voting end tally', () => {
    expect(votesCount(votes1)).toEqual(11);
    expect(votesCount(votes2)).toEqual(-31);
  });
});
// ReferenceError: votesCount is not defined✅
// b) Create the function that makes the test pass.

// pseudocode ->
// input -> objects
// output -> a number representing the subtraction between upVotes - downVotes
// process ->
// create a function named votesCount which will take in votes
// create a variable with the keys you have in your object
// return the subtraction between the key:values.
const votesCount = (votes) => {
  const { upVotes, downVotes } = votes;
  return upVotes - downVotes;
};
const votes1 = { upVotes: 13, downVotes: 2 };
// Expected output: 11✅
const votes2 = { upVotes: 2, downVotes: 33 };
// Expected output: -31✅


//  Option 2 , by Chris and Kyle :

// describe('simpMath', () => {
//   it('returns the voting end tally', () => {
//     const votes1 = { upVotes: 13, downVotes: 2 };
//     // Expected output: 11✅
//     const votes2 = { upVotes: 2, downVotes: 33 };
//     // Expected output: -31✅
//     expect(votesCount(votes1)).toEqual(11);
//     expect(votesCount(votes2)).toEqual(-31);
//   });
// });

// const simpMath = (obj) => {
//   return obj['upVotes'] - obj['downVotes']
// }

// // Option 3:
// const simpMath = ({upVotes, downVotes}) => {
//   return upVotes - downVotes
// }


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// a) Create a test with an expect statement using the variables provided.

describe(dataTypeZ, () => {
  it("returns one array with no duplicate values", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]✅
    expect(dataTypeZ(dataTypesArray1,dataTypesArray2).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// ReferenceError: dataTypez is not defined✅
// b) Create the function that makes the test pass.

// pseudocode ->
// input -> takes in two arrays
// output ->  one array with no duplicate values
// process ->
// create a new array using the .concat method, which will merge the two arrays we have
// create another array but this time using the .filter method to iterate through each element of the original array
// and executing a callback function on each element and  the callback takes in two parameters 'value' and 'index' and
// the arrow function checks if the current 'value''s first occurrence index 'arr.indexOf(value)' is equal to the current 'index'
// If the condition is true, the item is included in the unique array 
let arr = dataTypesArray1.concat(dataTypesArray2); 
// console.log(arr);
let unique = arr.filter((value, index) => arr.indexOf(value) === index);
console.log(unique);

// quick demo on how the function will compare the values and indexes , it took me some time to understand but here it is:
// ['array', 'object', 'number',  'string', 'Boolean', 'string', 'null', 'Boolean', 'string', 'undefined']
//    0          1        2           3         4        5          6        7         8           9

//    0          1        2           3         4        3          6        4         3           9

// so the ones that doesn't match the initial value:index pair will be left out of the new array
  
//   STRETCH by Chris:
  
  
// describe(noDupes, () => {
//  it("returns one array with no duplicate values", () => {
//    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
//    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
//    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]✅
//    expect(dataTypeZ(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })
  
//   const noDupes = (...arrays) => {
//     let flatennedArray = array.flat()
//     return [...new Set(flattenedArray)]
//   }   
 
// Option 2 by Chris and Bea:

// describe(noDupes, () => {
//   it("returns one array with no duplicate values", () => {
//     const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
//     const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
//     // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]✅
//     expect(dataTypeZ(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })
// const noDupes = (array1, array2 ) => {
//   const combined = array1.concat(array2)
//   return combined.filter((value, index) => combined.indexOf(value) === index)
// }



