const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
console.log(pokemon[0].name)
    const bListPkmn = pokemon.filter( p => p.name[0] === "B" ); // The p.name[0] is accessing the first character of the name property of each Pokemon object p. In JavaScript, strings are array-like and can be accessed using indices.
    console.log(bListPkmn);


    const pkmnIds = pokemon.map(p => p.id);

    console.log(pkmnIds);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. an array of pokémon objects where the id is evenly divisible by 3
const newarray_3 = pokemon.filter(item => item.id % 3 === 0);
console.log(newarray_3);

// 2. an array of pokémon objects that are "fire" type
const newarrayfire = pokemon.filter(item=> item.types.includes("fire"));
console.log(newarrayfire);

// 3. an array of pokémon objects that have more than one type
const newarraymorethan1 = pokemon.filter(item => item.types.length >1);
console.log(newarraymorethan1);

// 4. an array with just the names of the pokémon
const arraynames = pokemon.map(item => item.name);
console.log(arraynames);

// 5. an array with just the names of pokémon with an id greater than 99
const arrayx = pokemon.filter(item => item.id > 99).map(item => item.name);
console.log(arrayx);

// 6. an array with just the names of the pokémon whose only type is poison

const arraypoison = pokemon.filter(item => item.types.length == 1 && item.types.includes("poison")).map(item => item.name)
console.log(arraypoison);

// 7. an array containing just the first type of all the pokémon whose second type is "flying"

const arrayoo = pokemon.filter(item => item.types[1]=="flying").map(item => item.types[0])
console.log(arrayoo);

// 8. a count of the number of pokémon that are "normal" type

const normalcountarray = pokemon.filter(item => item.types.includes("normal")).length;
console.log(normalcountarray);