//Practice reading JavaScript the same way as the interpreter reads it.
// After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, look back at how the code is hoisted by the interpreter.
// #1:
console.log(hello);                                   
var hello = 'world';  

//How Javascript reads it:
var hello;
console.log(hello);
hello = 'world'; 

// #2:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);}

//How Javascript reads it:
var needle;
function test;
needle = 'haystack';
//function call:
var needle;
needle = 'magnet';
console.log(needle); //--> magnet

// #3:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//How Javascript reads it:
var brendan;
brendan = 'super cool';
function print;
console.log(brendan); // --> super cool

// #4:
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//How Javascript reads it:
var food;
function eat;
food = 'chicken';
console.log(food); // --> chicken

//#5: 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//How Javascript reads it:
//error: function not declared (mean is not a function)


// #6: 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//How Javascript reads it:
var genre;
function rewind;
genre = "disco";
// function call:
var genre;
genre = "rock";
console.log(genre); // rock
genre = "r&b";
console.log(genre); // r&b
// function call done
console.log(genre); // disco

// #7:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//How Javascript reads it:
function learn;
// function call:
var dojo;
dojo = "seattle";
console.log(dojo); // seattle
dojo = "burbank";
console.log(dojo); // burbank
// function call done
console.log(dojo); //undefined


//#8:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
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

//How Javascript reads it:
function makeDojo;
// function call:
const dojo = {};
dojo.name = name; //dojo.name = Chicago; 
dojo.students = students; //dojo.students = 65
dojo.hiring = true;
console.log(makeDojo("Chicago", 65)); 
// --> dojo = {"name": Chicago, "students": 65, "hiring": true }

console.log(makeDojo("Berkeley", 0)); // --> error



