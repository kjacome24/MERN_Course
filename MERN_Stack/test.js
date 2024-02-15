const animal = {
	type:"bird"
}
const animalCopy = {...animal}
animalCopy.type = "turtle"
console.log("Original: " + animal.type, "The Copy: " + animalCopy.type)

// Spread deep copy
const personcopy  = {...person}; 

personcopy.firstName = 'Ziggy';
personcopy.addresses[0].city = 'New York';
console.log(personcopy); // Ziggy
console.log(person);



const person = [1,2]
const personCopy = [...person]


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal, ...rest] = animals;  
console.log(rest); 

// ------------------------

let state = [1, 2, 3, 4, 5]
const useState = [
    //Array index 0; A Getter Function
    function () {
        return state
    },
    //Array index 1; A Setter Function
    function (newStateValue) {
        state = newStateValue
        return state
    }
];
const [getter, setter] = useState;


function update(param1, param2) {
    setter([...param1, param2])
    return state
}
update(getter(), 6)
console.log(state) //Output: [1, 2, 3, 4, 5, 6]



// ------------------------
var x = function (name) {
    console.log('Hello World '+ name)
}

x("Kevin")

// ------------------------
const x = name => console.log('Hello World '+ name)
x("Kevin")

// ------------------------
const x = (greeting,name) => console.log( greeting + name)
x("hello ","Kevin")


// ------------------------
const x = (greeting,name) => {
    console.log( greeting + name)
    console.log( name)
}


x("hello ","Kevin")

// ------------------------ Explicit return
const x = (greeting,name) => {
    return greeting + name
}
console.log(x("hello ","Kevin"))

// ------------------------ Implicit return
const x = (greeting,name) => greeting + name

console.log(x("hello ","Kevin"))

// ------------------------------------Examples Arrow Functions
//1 ------------------------------------
var sayHello = function(name) {
    console.log('Hello ' + name);
  };
  
sayHello('Kevin');  

//2 ------------------------------------
var sayHello = (name) => {
    console.log(`Hello ${name}`);// ------------------------------------Complex string
  };

sayHello('Kevin');
  
//3 ------------------------------------
var sayHello = name => console.log(`Hello ${name}`);
sayHello('Kevin');

// ------------------------ Explicit return for object literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
// -------------------------- Implicit return for object literal
const returnObj = () => ({ firstName: 'John', lastName: 'Wick' }) // Surround the object literal in parenthesis (()) to indicate an implicit return

console.log(returnObj())




// ------------------------------------Examples Arrow Functions
const obj = {
    name2: "John",
    es5Method: function () {
        console.log(obj.name2)
    }
};
obj.es5Method(); 

const {name2, es5Method} = obj;
console.log(name2)

es5Method()


// ------------------------------------
const obj = {
    name: "John",
    es5Method: function () {
        console.log(obj.name)
    }
};
const newObj = {...obj, name: "Joe"}
//Logs the newObj object's properties
obj.es5Method()
console.log(obj)
console.log(newObj)
//Executes the inherited es5Method on the newObj
newObj.es5Method()


// ----------------------------------------Context this es5 

const obj = {
    name: "John",
    es5Method: function () {
        console.log(this.name)
    }
};
const newObj = {...obj, name: "Joe"}
//Logs the newObj object's properties
console.log(newObj)
//Executes the inherited es5Method on the newObj
newObj.es5Method()


// ----------------------------------------Context this es6

const obj = {
    name: "John",
    arrowMethod: () => {
       console.log(this.name)
    }
};
const newObj = {...obj, name: "Joe"}
//Logs the newObj object's properties
console.log(newObj)
//Executes the inherited arrowMethod on the newObj
newObj.arrowMethod()
