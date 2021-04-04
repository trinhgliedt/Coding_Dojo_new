//#1: Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function arr1to255(){
    var arr=[];
    for (var i=1; i<256; i++){
        arr.push(i);
    }
    return arr;
}
newArr=arr1to255();

//#2: Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function sumEven1to1000(){
    var sum =0;
    for (var i=0; i<1001; i=i+2){
        sum = sum+i;
    }
    console.log(sum);
}
sumEven1to1000();

//#3: Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOdd1to5000(){
    var sum =0;
    for (var i=1; i<5001; i=i+2){
        sum = sum+i;
    }
    return sum;
}
sumOdd1to5000();

//#4: Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function iterateArr(arr){
    var sum=0;
    for (var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
iterateArr([2,-2,4,4,8]);

//#5: Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr){
    var max=arr[0];
    for (var i=0; i<arr.length; i++){
        if (max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
findMax([1,-9,8,15,-3,-7]);

//#6: Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(arr){
    var avg=arr[0], sum= 0;
    for (var i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    avg=sum/arr.length;
    console.log('sum:'+sum);
    return avg;
}
findAvg([1,-9,8,15,100,-7]);

//#7:Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrOdd(){
    var arr=[];
    for (var i=1; i<51; i=i+2){
        arr.push(i);
    }
    return arr;
}
arrOdd();

//#8: Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterthanY(arr,y){
    var count=0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]>y){
            count = count+1;
        }
    }
    return count;
}
greaterthanY([1,5,6,8,5,-5,-4,-56],0);

//#9: Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareArr(arr){
    for (var i=0; i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr;    
}
squareArr([1,2,3,4]);

//#10: Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function noNegArr(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;    
}
noNegArr([-1,2,-3,4]);

//#11: Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxminavg(arr){
    var max=arr[0], min=arr[0], sum=0;
    for (var i=0; i<arr.length; i++){
        sum=sum+arr[i];
        if (max<arr[i]){
            max=arr[i];
        }
        if (min>arr[i]){
            min=arr[i];
        }
    }
    avg=sum/arr.length;
    var newArr=[max,min,avg];
    return newArr;    
}
maxminavg([8,9,7,6,5]);
//#12: Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapFirstLast(arr){
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
}
swapFirstLast([5,6,7,3,2,1]);

//#13: Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numbertoDojo(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]='Dojo';
        }
    }
    return arr;    
}
numbertoDojo([-1,2,-3,4]);