//#1: Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function makeItBig(arr){
    for (var i=0; i<arr.length; i++){
         if (arr[i]>0){
             arr[i]='big';
         }
    }
    return arr;
}
makeItBig([-5,6,7,8,9,-4,-1,3,2]);

//#2: Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowreturnHigh(arr){
    var max = arr[0], min=arr[0];
    for (var i=0; i<arr.length; i++){
         if (max<arr[i]){
             max=arr[i];
         }
         if (min>arr[i]){
            min=arr[i];
        }
    }
    console.log('min:'+min);
    return max;
}
printLowreturnHigh([-5,6,7,8,9,-4,-1,3,2]);

//#3: Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOnereturnAnother(arr){
    var firstOdd = arr[0];
    for (var i = 0; i<arr.length; i++){
        if (arr[i]%2 != 0){
            firstOdd = arr[i];
            break;
        }
    }
    console.log('The second-to-last value in the array is '+arr[arr.length-2]);
    return firstOdd;    
}
printOnereturnAnother([-2,6,4,8,9,-4,-1,3,2]);

//#4: Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function newDouble(arr){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}
newDouble([-2,6,4,8,9,-4,-1,3,2]);

//#5: Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPossitive(arr){
    var countPos=0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>0){
            countPos = countPos + 1;
        }
    }
        arr[arr.length-1]= countPos;
        return arr;
}
countPossitive([-2,6,4,8,9,-4,-1,3,2]);

//#6: Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evensAndOdds(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i]%2 !=0 && arr[i+1]%2 !=0 && arr[i+2]%2 !=0){
            console.log("That's odd!");
        }
        if(arr[i]%2 ==0 && arr[i+1]%2 ==0 && arr[i+2]%2 ==0){
            console.log('Even more so!');
        }
    }
}
evensAndOdds([1,5,3,0,9,-2,-8,6,4]);

//7: Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function increaseOdd(arr){
    for (var i=0; i<arr.length; i++){
        if (i%2 !=0){
            arr[i]=arr[i]+1;
        }
        console.log('arr['+i+'] is '+arr[i]);
    }
    return arr;
}
increaseOdd([1,5,3,0,9,-2,-8,6,4]);

//8: Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number
// - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr) {

    for(var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }

    return arr;
}

var myArr = (["hello", "dojo", "awesome"]);
previousLengths(myArr);
console.log(myArr);   // output is ["hello", 5, 4]
/*
myArr = ["hello", "dojo", "awesome"]
i = 2
arr[2]=arr[2-].length

*/




function previousLengths(arr){
    for (var i=arr.length-1; i>0; i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}
previousLengths(['Coding','Dojo','Awesome','Sun']);

//9: Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(arr){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}
addSeven([5,3,2,-4,3,6,2,-5]);

//10: Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArr(arr){
    for (var i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
reverseArr([1,2,3,6,4,6,2,8,12]);

//#11: Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negativeArr(arr){
    for (var i=0; i<arr.length; i++){
        arr[i]= Math.abs(arr[i])*-1;
    }
    return arr;
}
negativeArr([1,-2,3,-6,4,-6,-2,-8,12]);

// #12: Always Hungry - Create a function that accepts an array, and prints "yummy"
// each time one of the values is equal to "food".  If no array values are "food",
// then print "I'm hungry" once.

function alwaysHungry1(arr) {
    var count = false;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            count = true;
        }
    }

    if(count == false){
        console.log("I'm hungry");
    }
}

var exampleArr = ["food", "food", "cat", 1];
alwaysHungry1(exampleArr);
//var exampleArr = [4,5,2,8];
//var exampleArr = ["food", "food", "cat", 1];


function alwaysHungry(arr){
    var count=0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]=="food"){
            console.log('yummy');
            count=count+1;
        }
    }
    if (count==0){
        console.log("I'm hungry");
    }  
}
alwaysHungry([1,2]);
alwaysHungry(['food','food','food','food']);

//#13: Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr){
    for (var i=0; i<arr.length/2; i=i+2){
        var temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    console.log(arr);
}
swapTowardCenter([true,42,"Ada",2,"pizza"]);
swapTowardCenter([1,2,3,4,5,6]);

//#14: Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArr(arr,num){
    for (var i=0; i<arr.length; i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}
scaleArr([1,2,3], 3);