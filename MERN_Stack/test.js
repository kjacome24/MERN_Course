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

