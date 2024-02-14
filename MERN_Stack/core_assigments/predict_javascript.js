// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

 //- Prediction of the example output should be in commented-out code here.
//  Answer: Tesla
//  Answer: Mercedes
 //- The actual output
//  Answer: Tesla
//         Mercedes
 //- Why did the code produce that output? If applicable, how would you get the index value that did not output?
// Well, the code produced the output because we are using the destructuring assignment to assign the first and second elements of the array to the variables randomCar and otherRandomCar respectively but the third element is not being taken into consideration. 
// As for the solution we have two options: 
// Option1: We can use the spread operator to get the remaining elements of the array and assign them to a new array.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,...otherRandomCars ] = cars
console.log(randomCar)
console.log(otherRandomCars)
// Option 2: We can use the index to get the third element of the array.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
const [ ,,thirdRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)
console.log(thirdRandomCar)

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. 
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

 //- Prediction of the example output should be in commented-out code here.
//  Answer: Elon
//  Answer: Error because employeeName variable is not being defined but just the renamed variable. 
 //- The actual output
    // ReferenceError: employeeName is not defined
 //- Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?
// Because employeeName variable is not being defined but just the renamed variable. 
// Here we can do the following: 
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName} = employee;
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3. 

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

 //- Prediction of the example output should be in commented-out code here.
//  Answer: 12345
//  Answer: undefined
 //- The actual output
//  Answer: 12345
//          undefined
 //- Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?
// This is happening because the password varaible does not exist whithin the iterable object (person). To fix this issue we just need to add it into the object as follows:

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: '12345'
}
const password = '12345';
const { password: hashedPassword } = person;  

console.log(password);
console.log(hashedPassword);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4. 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);


 //- Prediction of the example output should be in commented-out code here.
//  Answer: false
//  Answer: true
 //-. The actual output
//  Answer: false
//          true
 //-. Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const fourth = second;
//Predict the output
console.log(first === second);
console.log(first === third);
console.log(fourth);

 // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

 //- Prediction of the example output should be in commented-out code here.
//  Answer: value
//  Answer: [ 1, 5, 1, 8, 3, 3 ]
//  Answer: 1
//  Answer: 5
 //-. The actual output
//  value
//  [ 1, 5, 1, 8, 3, 3 ]
//  1
//  5
 //-. Why did the code produce that output? Console.log the last value in the secondKey property's array.
// Option 1:  
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
console.log(secondKey[5]);

// Option 2:
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork, , , ,last] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
console.log(last);




 // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6. 
var beatles = ['Paul', 'George', 'John', 'Ringo']; 
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

 //- Prediction of the example output should be in commented-out code here.
//  Answer: we are gonna print the names of each artist in the array and the index in which they are located.
 //-. The actual output
//  Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4
 //-. First, how many scopes does the following code block contain? Define each scope and guess what the output will be.
// The code block contains 3 scopes:
// 1. Global Scope
var beatles = ['Paul', 'George', 'John', 'Ringo']; 
// 2. Function Scope
function printNames(names) {
    function actuallyPrintingNames() {
// 3. Inner function Scope
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);


  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 7.

var beatles = ['Paul', 'George', 'John', 'Ringo']; 
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
          let name = names[index];
          console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
      }     
  actuallyPrintingNames();
}
printNames(beatles);


  

  //- Prediction of the example output should be in commented-out code here.
//  Answer: we are gonna print the names of each artist in the array and the index in which they are located.
 //-. The actual output
//  ReferenceError: name is not defined
 //-. Why did the code produce that output?
//  Because the variables index and name are declared using the let keyword, they are block-scoped and are not accessible outside of the block in which they are declared.


    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// 8.
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);
    
//- Prediction of the example output should be in commented-out code here.
//  Answer: we are gonna print the names of each artist in the array and the index in which they are located.
 //-. The actual output
//  Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
 //-. Why did the code produce that output?
// Because we just have the same example without the final line after the for sentence. Also we chagned let to const for the variable name. As for the reason of the change it will be more about making sure we will not change the value of the variable name.


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 9.
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}

console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet[0] === planetCopy[0])

//- Prediction of the example output should be in commented-out code here.
//  Answer: true
//  Answer: false
 //-. The actual output
//  true
//  false
 //-. Why did the code produce that output? Explain why each console.log looks the way it does.
// The first console.log is true because the arrays in both the planet and planetCopy objects are the same.
// the s econd console.log is false because the planet and planetCopy objects are two different objects in memory. Therefore, when we compare the planet and planetCopy objects, we get false.

