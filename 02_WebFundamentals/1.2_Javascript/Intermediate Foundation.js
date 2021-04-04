//#1: Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num){
    var sum=0;
    for (var i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}
var myNum=sigma(5);
console.log(myNum);
//#2: Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num){
    if (num>=1){
        var p=1;
    
        for (var i=1; i<=num; i++){
            p = p*i;
        }
        return p;
    }
    else {
        alert('Please provide a positive parameter');
    }
}
var myNum= factorial(4);
console.log(myNum);

//#3: Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
// fib(0) = 0 
// fib(1) = fib(0) + 1
// fib(2) = fib(0) + fib(1) = 0 + 1 = 1
// fib(3) = fib(2) + fib (1) = 1 + 1 = 2
// fib(4) = fib(3) + fib(2) = 2 + 1 = 3
// fib(5) = fib(4) + fib(3) = 3 + 2 = 5
// fib(6) = fib(5) + fib(4) = 5 + 3 = 8
// fib(7) = fib(6) + fib(5) = 8 + 5 = 13

function fibonacci(num){
    var arr=[0,1], sum=0;
    //      fib0 fib1
    // var num=8;
    if (num==0){
        return 0;
    }
    else if (num == 1){
        return 1;
    }
    else {
        for (var i=3; i<=num+1; i++){
            arr.push(arr[i-2]+arr[i-3]);
        }
        console.log(arr);
        return arr[arr.length-1];

    }
 }
//  fibonacci(8);
 
//  function Fibonacci(num) {
//     var arr = [0, 1]
//     for(i = 2; i <= num; i++) {
//         arr[i] = arr[i-1] + arr[i-2];
//     }
//     return arr[num];
// }

// console.log(Fibonacci(5))


//4: Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(arr){
    if (arr.length>=2){
        return arr[arr.length-2];
    }
    else {
        return null;
    }
}
secondToLast([1,3,"hi",4]);
// secondToLast([1]);

//5: Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nToLast(arr,n){
    if (arr.length>=n){
        return arr[arr.length-n];
    }
    else {
        return null;
    }
}
nToLast([1,3,"hi",4],3);
// secondToLast([1]);

//6: Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondLargest(arr){
    if (arr.length<2){
        return null;
    }
    else {
        var max=arr[0]; secondMax=arr[0];
        for (var i=0; i<arr.length; i++){
            if (max<arr[i]){
                max=arr[i];
            }
        }
        for (var i=0; i<arr.length; i++){
            if (max>arr[i] && secondMax<arr[i]){
                secondMax = arr[i];
            }
        }
    }
    console.log(max);
    return secondMax;
}
secondLargest([5,6,-1,8,10]);
// secondLargest([5,10]);
// secondLargest([2]);

//7: Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    arr = newArr;
    return arr;
}
doubleTrouble(['coding',1,-5,0.2]);