var glazedDonuts = [
    {
      frosting: 'glazed',
      style: 'cake',
      type: 'old fashioned',
      age: '45',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'regular',
      age: '5',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'jelly filled',
      age: '1',
      time: 'seconds'
    }
  ];
  var numPurchase = 0;
for (var donut in glazedDonuts){
  console.log(glazedDonuts[donut].type);
  if((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds'){
    numPurchase++;
  }
  else {
    console.log('not this donut...');
   }
}
console.log(numPurchase);

  var purchase;
//You
if((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds'){
  //shop owner
  purchase = glazedDonuts[0];
}
else {
  console.log('sorry it has been out a bit longer');
}  

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
for (var i in users){
    console.log
}
console.log(users[0]);
console.log(users[1].age);



/*
1.) Recreate the push function.
Add a new val to back of an array passed in without using .push
*/

function pushArr(arr,newValue){
    arr[arr.length]=newValue;
    // return arr;
}

var myArr = [1,2,3,4];

pushArr(myArr,5);

console.log(myArr);

/* 
  Array: Push Front
  Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
*/
function pushFront(arr,newValue){
    for (var i=arr.length; i>0; i--){
        arr[i]=arr[i-1];
    }
    arr[0]=newValue;
}
var myArr = [1,2,3,4];

pushFront(myArr,5);

console.log(myArr);
//myArr = [1,2,3,4];
//         0 1 2 3
//i=4 arr[4]=arr[3]=4
//i=3 arr[3]=arr[2]=3
//i=2 arr[2]=arr[1]=2
//i=1 arr[1]=arr[0]=1
//i=0: condition no longer met
//arr[0]=5