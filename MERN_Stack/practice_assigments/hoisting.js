// # 1-------------------------------------------------------------
var hello = 'world'; 
console.log(hello);
// hello = 'world';

// # 2------------------------------------------------------------
var needle = 'haystack';

function test(){
    var needle = 'magnet';
    console.log(needle);
    var needle;
}
test();
console.log(needle);

// # 3-------------------------------------------------------------

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
    var brendan;
}
print();
console.log(brendan);

// # 4-------------------------------------------------------------

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
    console.log(food);
}

// # 5-------------------------------------------------------------
var food = "chicken";
mean();
function mean () {
    var food = "fish";
    console.log(food);
    var food;
}

console.log(food);

// # 6-------------------------------------------------------------
var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}



// # 7-------------------------------------------------------------

dojo = "san jose";
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// # 8-------------------------------------------------------------

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
}
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
