


grades = {"Kermit": "A", "Miss Piggy": "B", "Gonzo": "B+"};
// Kermit A+
// Gonzo B-
// Miss Piggy B
// Fozzie C
console.log(grades);
grades["Fozzie"] = "C";
grades["Kermit"] = "A+"
grades["Gonzo"] = "B-";
console.log(grades);

// grade = {Kermit: "A", MissPiggy: "B", Gonzo: "B+"}
// grade.Kermit = "A+"
// grade[Gonzo] = "B+"

heroes = [
    {first: "Clark", last: "Kent", world: "DC"},        //0
    {first: "Peter", last: "Parker", world: "Marvel"},  //1
    {first: "Bruce", last: "Wayne", world: "DC"}        //2
]

console.log(heroes[0].world;
// Predict the output:
for(var i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

/*
 {first: "Clark", last: "Kent", world: "DC"},        //0
    {first: "Peter", last: "Parker", world: "Marvel"},  //1
    {first: "Bruce", last: "Wayne", world: "DC"}  
    */

//Print all the heroes' first name

for (hero in heroes){
    console.log(heroes[hero].first);
}

//Print the first names of only the DC characters

for (hero in heroes){
    if (heroes[hero].world=="DC"){
        console.log(heroes[hero].first);
    } 
}

// Print the first names of only the DC characters

for (var i = 0; i <heroes.length; i++) {
    if(heroes[i].world == "DC"){
        console.log(heroes[i].first);
    } 
}

//7/28/20
/* 
  Recreate the pop method without using .pop(); Be sure to return the popped value.
*/
function pop(arr) {
    var temp = arr[arr.length-1];
    arr.length = arr.length -1;
    return temp;
}

var myArr = [-1,8,2,74,5,0,5];
console.log(myArr);
var lastNum = pop(myArr);
console.log(myArr);
console.log(lastNum);
/* 
  Array: Pop Front
  Create a function that, given an array, removes and returns the value at the beginning of the array. Do this without using any built-in array methods except pop() .
*/
function popFront(arr){
    var firstValue=arr[0];
    for(var i=0; i<arr.length;i++){
    
      arr[i]=arr[i+1];
      
    }
    arr.pop();
    return firstValue;
  }
  var myArr = [5,4,1,-2,3];
  console.log(myArr);
  var num = popFront(myArr);
  console.log(myArr);
  console.log(num);