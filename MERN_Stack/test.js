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



// ----------------------------------------Ternary statement
let canAfford = (itemPrice, accountBalance) =>{
    return itemPrice > accountBalance // condition
    ?  `Cannot afford! You are $${itemPrice - accountBalance}  short` // if true
    : "Can afford!"; // if false
    }

    let myAccountBalance = 1000;
    const drone = 1001;
    let droneOnSale = drone - drone * 0.03;
    console.log(canAfford(drone, myAccountBalance));
    console.log(canAfford(droneOnSale, myAccountBalance));
    
    

console.log(canAfford(500, 300))






-------------------------------------------

function smallest( arr ) {
    let min = arr[0];
    for( let element of arr ) {
        console.log(element)
        if( element < min ) {
            min = element;
        }
    }
    return min;
}
console.log(smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45,1,5] ));

function smallest( sortedArr ) {
    return sortedArr[0];
}
console.log(smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45,1,5] ));

const results = [2, 5, 6, 12, 14, 28, 37, 41, 44, 45,1,5];

for(let i=0; i<results.length; i++){
    for(let value of results) {
        for(let j=results.length-1; j>0; j--) {
            console.log(i, value, j);
        }
    }
}


// ---------------------------------------------Fibonacci
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}


const { getRandomValues } = require('crypto');
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
rFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
iFib(20);
console.log(`This took ${performance.now() - start} milliseconds to run`);



// -----------------------------------------------------

arrayx = [1, 5, 7, 3]

const left = (pivot,arr) => {
    let left;
    for (let i = 0; i <= pivot; i++) {
        if (arr[i] >= arr[pivot]){
            left =  i;
            return left;
        }
}
}

const right = (pivot,arr) => {
    let right;
    for (let j = arr.length-1; j >= pivot; j--) {
        if (arr[j] <= arr[pivot]){
            right =  j;
            return right;
        }
    }
}

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    if (arr.length == 2) {
        if (arr[0] > arr[1]) {
            return [arr[1], arr[0]];
        }
        return arr;
    }
    var pivot = Math.floor(Math.random() * (arrayx.length - 2)) + 1;
    let rightx = right (pivot,arr)
    let leftx =  left (pivot,arr)
    let temp = arr[rightx];
    arr[rightx] = arr[leftx];
    arr[leftx] = temp;
    quickSort(arr.slice(0,pivot));
    quickSort(arr.slice(pivot,arrayx.length - 1));
    return arr;
}
console.log(quickSort(arrayx))

// ----------------------------------------------------------------
const user1 = {
        name: "Kermit",
        email: "kermit@sesame.org"
    }
    
// ---------------------------------------------------------------------Class Javascript
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${ this.miles } miles on it.`);
        return this;
    }
}

const porshe911 = new Vehicle("Porshe", "911", "Yellow");
porshe911.drive().drive().drive();

class M5 extends Vehicle {
    constructor(color) {
        super("Mazda", "M3", color);
        this.hp = 616;
    }
    printSpecSummary () {
        console.log(`${ this.manufacturer } ${ this.model } in ${ this.color } has ${ this.hp }hp`);
    }
}


const mazdaM3 = new M5("Red");
mazdaM3.printSpecSummary();
mazdaM3.drive().drive().drive();


// ------------------------------------------Súper Continuado

// clase principal de Vehicle 
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
    // método simple de la clase
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// clase M5 hijo
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    //funcion simple de la clase hijo
    childFunction() {
        // usando super, podemos llamar el método adre
        const message = super.parentFunction();
        console.log(message);
    }
}
const m5 = new M5("Blue");
m5.childFunction();
console.log(m5.parentFunction());


// ------------------------------------------Súper Continuado2 Heritage

// clase principal de Vehicle 
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        return this.miles;
    }
}
// clase M5 hijo
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    //funcion simple de la clase hijo
    drive() {
        // usando super, podemos llamar el método adre
        const miles = super.drive()*2;
        return miles;
    }
}
const m5 = new M5("Blue");
const porshe911 = new Vehicle("Porshe", "911", "Yellow");
console.log(porshe911.drive());
console.log(m5.drive());

// ------------------------------------------collectable cards game

class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name,cost,action,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.action = action;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(this.action == "increase"){
                this.stat == "res" ? target.res += this.magnitude : target.power += this.magnitude;
            }else{
                this.stat == "res" ? target.res -= this.magnitude : target.power -= this.magnitude;
            }
            
        }else{
            throw new Error("Target must be a unit!");
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);
const hardAlgorithm = new Effect("Hard Algorithm",2,"increase","increase target's resilience by 3","res",3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"decrease","reduce target's resilience by 2","res",2);
const pairProgramming = new Effect("Pair Programming",3,"increase","increase target's power by 2","power",2);


// player 1:
console.log(redBeltNinja);
