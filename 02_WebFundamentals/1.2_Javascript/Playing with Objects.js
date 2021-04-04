
//How would you print/log John's age?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users[1].age);

//How would you print/log the name of the first object?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users[0]).name;


//How would you print/log the name and age of each user using a for loop?  Your output should look something like this
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
for (var i in users){
    console.log(users[i].age);
}

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
for (user in users){
    console.log(users[user].age);
}
