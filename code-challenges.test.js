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

describe(randomColors, () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it("returns a generic color sequence", () => {
    expect(colors2).toEqual(expect.arrayContaining(colors1));
    expect(colors2).toEqual(expect.arrayContaining(colors2));
  });
})
//  ReferenceError: randomColors is not defined

// b) Create the function that makes the test pass.

// pseudocode ->
// input -> array of colors as values
// output -> an array of random colors
// process ->
// 
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe(votesCount, () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 }
  // Expected output: -31
  it("returns the voting end tally", () => {
    expect(votes1()).toEqual(11)
    expect(votes2()).toEqual(-31)
  })
})

// ReferenceError: votesCount is not defined


// b) Create the function that makes the test pass.

// pseudocode ->
// input -> objects
// output -> sum of votes
// process ->

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe(dataTypeZ, () => {
  it("returns thed ata types", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(dataTypesArray1()).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    expect(dataTypesArray2()).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// ReferenceError: dataTypez is not defined



// b) Create the function that makes the test pass.

// pseudocode ->
// input -> takes in two arrays
// output ->  one array with no duplicate values
// process ->

