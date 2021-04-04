/*
The “Basic 13”
These are Coding Dojo’s foundation “Basic 13” algorithm challenges. 
For each, write a JavaScript function - a suggested function name is included below. 
Can you finish all of these challenges in less than two minutes each?   

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255. 
*/
function print1to255(){
    for (var i=1; i<256; i++){
        console.log(i);
    }
}
print1to255();

// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255. 

function printOdds(){
    for (var i=1; i<256; i++){
        if (i%2 ==1){
            console.log(i);
        }
    }
}
printOdds();

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 


function printIntandSum0to255(){
    var sum=0;
    for (var i=0; i<256; i++){
        console.log('i: ',i);
        sum = sum + i;
        console.log('sum: ',sum);
    }
}
printIntandSum0to255();

// 4. Iterate and Print Array
// Iterate through a given array, printing each value. 
// PrintArrayVals(arr)

function iterateandprintarray(arr){
    for (var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
iterateandprintarray([1,2,3,4,5]);

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 

function findprintMax(arr){
    var max=arr[0];
    for (var i=0; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    console.log(max);
}
findprintMax([-1,-3,-7,6]);

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average

function printavg(arr) {
    var sum=0;
    for (i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    console.log('sum: ',sum);
    console.log("avg: ",avg);
}
printavg([8,6,5,4,3]);

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).  

function oddArr(){
    var arr=[];
    for (var i=1; i<256; i=i+2){
        arr.push(i);
    }
    return arr;
}
console.log(oddArr());

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

function squareArr(arr){
    for ()
}


//7/30/20
/* 
  Array: Remove At
  Given array and an index, remove and return the array value at that index. 
  Do this without using built-in array methods except pop().
*/
function removeAt(arr,n){
  
  var temp=arr[n];
    for (var i=n; i>arr.length; i++){
        arr[i]=arr[i+1];
    }
    arr.pop();
    return temp;
}
removeAt([5,6,3,7,9,5],2);


/* 
  Array: Min to Front
  Given an array of comparable values, move the lowest element to array’s 
  front, shifting backward any elements previously ahead of it. Do not 
  otherwise change the array’s order. Given [4,2,1,3,5] , 
  change it to [1,4,2,3,5] and return it. As always, do this without using 
  built-in functions.
*/
function minToFront(arr){
    var min=arr[0];
    var position = 0;
    for (var i=0; i<arr.length; i++){
      if (min>arr[i]){
        min=arr[i];
        position = i;
      }
    }
    // console.log(min)
    // console.log(position)
    for (var j=position; j>0; j--){
      arr[j]=arr[j-1];
    }
    arr[0]=min;
    return arr;
  }
  minToFront([4,2,1,3,5]);

  //7/31/20
  /* 
  Given an arr and a separator, output a string of every item in the array separated 
  by the separator.
  The separator should only be between two elements.

  join([1, 2, 3], ", ") => "1, 2, 3"
  join([4, 5, 6, 7], "* ") => "4*5*6*7"
*/
function  arrToString(arr,s){
    var str="";
    for (var i=0; i<arr.length-2; i++){
        str=str+arr[i]+s;
    }
    str=str+arr[arr.length-1]
    return str;
}
arrToString([1, 2, 3], ", ")



/* 
Array: Second-Largest
Return the second-largest element of an array. Given [42,1,4,8,7] , return 8 . 
If the array is too short or all values are the same, return null .
*/
function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if (max == arr[0]){
        return null;
    }
    else {
        var pen = arr[0];
    for (var j = 1; j < arr.length; j++) {
        if (pen < arr[j] && arr[j] < max) {
            pen = arr[j];
        }
    }
    return pen;
}      
}
secondLargest([5, 5, 5, 5, 5]);
// secondLargest([5, 3, 4, -1, 8]);

//8/3/2020
/**
//  * param {String} str1
//  * param {String} str2
//  * return {Boolean}
//  * Are the two strings equal irrespective of case?
//  */

function caseInsensitiveStringCompare(str1, str2) {
    if (str1.toLowerCase()==str2.toLowerCase()){
        return true;
    }
    else {
        return false;
    }
   }
   caseInsensitiveStringCompare('Bryce', 'bryce');

//   console.log(caseInsensitiveStringCompare('This', 'this'));
//   // should log true
//   console.log(caseInsensitiveStringCompare('this', 'that'));
//   // should log false

//   /**
//    * @param {String} str
//    * @return {String} first letter of each "word" capitalized
//    */
  
function acronyms(str) {
      var newStr = "";
    var arr=[];
    arr=str.split(" ");
    for (var i = 0; i < arr.length; i++){
        newStr = newStr + arr[i].substring(0,1);
    }
    return newStr.toUpperCase();
  }
var myStr = "Live from New York, it's Saturday Night!";
console.log(acronyms(myStr));

//   'hello'.toUpperCase(); // returns 'HELLO'
  
//   console.log(acronyms("there's no free lunch - gotta pay yer way."));
//   // should log 'TNFL-GPYW'
//   console.log(acronyms("Live from New York, it's Saturday Night!"));
//   // should log 'LFNYISN'
  
  
//   /**
//    * @param {String} str
//    * @return {String} characters in the reverse order
//    */
  
function stringReverse(str) {
    newStr="";
    for (var i=str.length-1; i>=0; i--){
        newStr = newStr + str[i];
    }
    return newStr;
  }
  stringReverse("Hello");
  
//   console.log(stringReverse('this')); // should log 'siht'
//   console.log(stringReverse('something')); // should log 'gnihtemos'
















# //   8/4/2020
# /**
#  * #1
#  * param {String} str
#  * return {Boolean} Are the parentheses valid?
#  */
function parensValid(str) {
     var count = 0;

        
    for (var i=0; i<str.length; i++){

        if (str[i] == "("){
            count = count + 1;
            
        }
        else if (str[i] == ")"){
            count = count - 1;         
        }
        if (count < 0){return false;}
        }
    console.log(count);
    return (count===0);    
    }
  
    
  console.log(parensValid('(()))')); // should log false
  console.log(parensValid('((some)a)')); // should log true
  console.log(parensValid(')(')); // should log false
  console.log(parensValid('()()')); // should log true
  
  
// #2: 

   /**
#    * param {String} str
#    * return {Boolean} Are the braces valid?
#    */

  function bracesValid(str){

    var open_braces = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] == '(' || str[i] == '{' || str[i] == '['){
            open_braces.push(str[i]);
        }
        else if(str[i] == ')' || str[i] == '}' || str[i] == ']'){
            if((str[i] == ')' && open_braces[open_braces.length-1] == '(')
            || (str[i] == ']' && open_braces[open_braces.length-1] == '[')
            || (str[i] == '}' && open_braces[open_braces.length-1] == '{')){
                open_braces.pop();
            }
            else{
                return false;
            }
        }
    }
    return open_braces.length == 0;
}


console.log(bracesValid('{[()]}')); // should log true
console.log(bracesValid('{[()}]')); // should log false
console.log(bracesValid('{[a()b]c}')); // should log true
console.log(bracesValid('{}[]()[(])')); // should log false

//8/5/20
//Trinh's group: Trinh, Quinn, Bryce
function isPalindrome(str) {
    var check = false;
    for (var i = 0; i <= str.length / 2; i++) {
        if (str[i] === str[str.length - 1 - i]) {
            check = true;
        }
        else {
            check = false;
        }
    }
    return check;
}
console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true

//Nick Krauss's group
var BackwardsString = "";


    for (var i = str.length-1; i >= 0; i--){
      BackwardsString += str[i];
      console.log(BackwardsString);

    }
    return BackwardsString === str

  
  console.log(isPalindrome('mom')); // should log true
  console.log(isPalindrome('Mom')); // should log false
  console.log(isPalindrome('this')); // should log false
  console.log(isPalindrome('mooom')); // should log true



//Morley's solution: 
function isPalindrome(str) {
    for(var back = 0, front = str.length - 1; back < front; back++, front--) {
        if(str[back] !== str[front]) {
        return false;
        }
    }
}
console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true

//Morley's solution: with my modifications
function isPalindrome(str) {
    for(var back = 0, front = str.length - 1; back <= front; back++, front--) {
        console.log("back: ",back, "front: ",front)
        console.log("Before if: back: ",str[back], "front: ", str[front])
        if(str[back] !== str[front]) {
          console.log("back: ",str[back], "front: ", str[front])
          return false;
        }
        else {return true;}
        
        // return
    }
}
console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true



//Longest palindrome: howard
function longestPalindrome(str) {
    var prevPalindrome = currPalindrome = '';
    // i sets lower bound of the string
    for(var i = 0; i < str.length; i++){
        // j sets the upper bound of the string
        for(var j = str.length; j >= i; j--){
            if(isPalindrome(str.slice(i,j))){
                if(prevPalindrome.length < str.slice(i,j).length){
                    prevPalindrome = str.slice(i,j);
                }
                break;
            }
        }
    }
    return prevPalindrome;
  }
  console.log(longestPalindrome('this')); // should log 't'
  console.log(longestPalindrome('bobe')); // should log 'bob'
  console.log(longestPalindrome('what up, daddy-o?')); // should log 'dad'
  console.log(longestPalindrome('Yikes! my favorite racecar erupted!'));  // should log 'e racecar e'

// 8/6/2020 morning
// Book Index: Write a function that given a sorted array of page
// numbers, return a string representing a book
// index. Combine consecutive pages to create
// ranges. Given [1, 3, 4, 5, 7, 8, 10] ,
// return the string "1, 3-5, 7-8, 10" .


function join(arr, separator){
    var str = "";
    for (var i = 0; i<arr.length-1; i++){
      str += arr[i] + separator;
    }
    str += arr[arr.length-1];
    return str;
  }
  var myArr = ["a", "b", "c", "d"]; 
  mySep = " - ";
  console.log(join(myArr, mySep)); //should log "a - b - c - d"
  
  
  function bookIndex(arr){
    // find the gap between indexes
    var gapArr =[], gap=0;
    for (var i=0; i<arr.length-1; i++){
      gap = arr[i+1] - arr[i];
      gapArr.push(gap);
    }
    // console.log(gapArr); // gapArr = [2, 1, 1, 2, 1, 2]
    
    for (var i=0; i<gapArr.length; i++){
      if (gapArr[i] == 1){
        gapArr[i] ="M";
      }
      else {gapArr[i] ="B";}
      // console.log(gapArr);
    }
    var arrBMark =[];
    for (var i=0, j=0;  i<arr.length-1, j<gapArr.length; i++, j++){
      arrBMark.push(arr[i]);
      arrBMark.push(gapArr[j]);
    }
    arrBMark.push(arr[arr.length-1]);
    // console.log(arrBMark); // arrBMark = [1, B, 3, M, 4, M, 5, B, 7, M, 8, B, 10]; 
  var begArr=[], endArr=[], endResult="";
  // console.log("endResult: ",endResult);
  for (var i=1; i<arrBMark.length-2; i = i + 2){
      if (arrBMark[i] == "B"){
        endResult += arrBMark[i-1]; // end of last range , loop 1: endResult = "1", loop 2: endResult = "1, 3-5", "1, 3-5, 7-8"
        endResult += ", ";                  //endResult = "1, ", loop 2: endResult = "1, 3-5, " , "1, 3-5, 7-8, "
        endResult += arrBMark[i+1]; // beginning osf new range endResult = "1, 3", loop 2: endResult = "1, 3-5, 7", "1, 3-5, 7-8, 10"
        endResult += "-";              // = "1, 3-", "1, 3-5, 7-", "1, 3-5, 7-8, 10-"
        // console.log("loop ",i, "result: ",endResult);
      }
  }
  endResult += arrBMark[arrBMark.length-1];
  // console.log(endResult);
  return endResult;
  }
  
  var myArr = [1, 3, 4, 5, 7, 8, 10]; //arr length = 7
  //             2  1  1  2  1  2 //gapArr length = 6
  //             B  M  M  B  M  B
  // output = "1, 3-5, 7-8, 10"
  // arrBMark = [1, B, 3, M, 4, M, 5, B, 7, M, 8, B, 10]; 
  //             0  1  2  3  4  5  6  7  8  9  10 11  12 , length of this is 13
  var myArr2 = [5, 10, 11, 12];
  var myArr3 = [5, 10, 11, 12, 15, 16, 18, 20, 25, 26];
  console.log(bookIndex(myArr));
  console.log(bookIndex(myArr2));
  console.log(bookIndex(myArr3));

  //Howard's group:

  function bookIndex(arr) {
    var myStr = "";
    var firstnum = arr[0];
    var lastnum;
    for(var i = 0; i < arr.length; i++){
        // if it is not consecutive, (top end of range becomes current index)
        if (!(arr[i] + 1 == arr[i+1])){
            lastnum = arr[i];
            // This if statement is for checking for last element (don't add ", " at the end)
            if(i == arr.length -1){
                // Checks for cases where "-" is not needed. i.e. [5,10,12] -> logs "5, 10, 12"
                if(firstnum == lastnum){
                    myStr += firstnum;
                }
                // Else, "-" added to consecutive set of numbers
                else{
                    myStr += firstnum + "-" + lastnum;
                    firstnum = arr[i + 1];
                }
            }
            // separates the strings, rather than first index/last index.
            else{
                // Checks if the index is single, non-consecutive.
                if(firstnum == lastnum){
                    myStr += firstnum + ", "
                    firstnum = arr[i + 1];
                }
                // Else, "-" added to consecutive set of numbers
                else{
                    myStr += firstnum + "-" + lastnum + ", ";
                    firstnum = arr[i + 1];
                }
            }

        }
    }
    return myStr
  }

  console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
  console.log(bookIndex([5, 10, 11, 12]));
  


//   Common Suffix
// When given an array of words, returns the largest
// suffix (word-end) that is common between all
// words. For example, for input ["ovation",
// "notation", "action"] , return "tion" .
// Given ["nice", "ice", "sic"] , return ""



function commonSuffix(arr){
    var endP ="", shortestIndexLength = [arr[0].length];
    for (var i=0; i<arr.length; i++){
      if (shortestIndexLength > [arr[i].length]){
        shortestIndexLength = [arr[i].length];
      }
    }
    console.log("shortest array index: ",shortestIndexLength);
    
    for (var j=0; j<shortestIndexLength-1; j++){
      // console.log("Beg of loop j:");
      // get the last character of each of the array value
      var suffix = "";
      for (var i=0; i<arr.length; i++){ // looping through each index of the given array
        // suffix = ""; //to empty out the suffix at the beginning of each loop
        // console.log("Beg of loop i:");
        suffix += arr[i][arr[i].length -1-j]; //adding the last character of ech index value to a string called suffix
        // console.log("Array index ",i,"; Suffix inside loop i: ",suffix);
      }
      // if all characters are the same, we should have a string with all same characters * number of array indexes
        // console.log("Suffix before trimming: ",suffix); //nnn, length = 3
        //                                012
      //compare if the last characters are the same:
        var check = false;
        for (var k=0; k<suffix.length-1; k++){
          if (suffix[k] == suffix[k+1]){
            check = true
          } 
          else  {check = false;}
        }
        // console.log("are all characters in suffix the same? ",check);
console.log(commonSuffix(myArr2));        if (check == true){
          suffix = suffix[0];
          endP += suffix;
          
          }
        suffix = ""; // to empty out suffix for next use
        // console.log("Suffix after trimming: ",suffix);
        // console.log("End product: ",endP);
    }
    // now we need to reverse end product:
    var endP2 = "";
    for (var i=endP.length-1; i>=0; i--){
      endP2 += endP[i];
    }
    console.log("End product: ",endP2);
    return endP2; 
}
var myArr1= ["ovation","notation", "action"];
// loop from end of each index, get out the last character (len -1). Compare the last character of these indexes. If they are the same, store that in to suffix and continue.

//   Compare the second to last character of these indexes (len - 2). store that in to suffix and continue.

var myArr2= ["nice", "ice", "sic"];
console.log(commonSuffix(myArr1));



//8/7/2020
function invertHash(obj) {

    var newObj={};
    for (var key in obj){
      // console.log("Loop ",key);
      // var temp = key;
      // var temp1 = obj[key];
      // // console.log("temp (old key):",temp);
      // newObj[temp1]] = temp;
      newObj[obj[key]] = key;
      // console.log("new key: ",key);
      
      // console.log("new value: ",obj[key]);
      // console.log(obj);
      // console.log(newObj);
    }
    return newObj;
  }
  
  // var person={"name": "Ani", "gender": "female"};
  // console.log(person["name"]);
  
  
  console.log(invertHash({ someKey: 'someVal' })); // should log { someVal: 'someKey' }
  console.log(invertHash({
    key1: 'val1',
    key2: 'val2'
  })); // should log { val1: 'key1', val2: 'key2' }
  
  function invertHash(obj) {
    var newObj={};
    for (var key in obj){
      newObj[obj[key]] = key;
    }
    return newObj;
  }
  console.log(invertHash({ someKey: 'someVal' })); // should log { someVal: 'someKey' }
  console.log(invertHash({
    key1: 'val1',
    key2: 'val2'
  })); // should log { val1: 'key1', val2: 'key2' }
  
  
  /**
     * param {Array<String>} arr1 array of strings
     * param {Array<String>} arr2 array of strings
     * return {Object}
     * with the elements from the first as keys
     * and the elements from the second as values
     * 
     * NOTE: the two arrays are of equal length
     */
    //arr1: key
    //arr2: value
    function zipArraysIntoMap(arr1, arr2) {
      var newObj={};
      for (var i=0; i<arr1.length; i++){
        newObj[arr1[i]] = arr2[i];
      }
      return newObj;
    }
    
    console.log(
      zipArraysIntoMap(
        ['some', 'thing'], ['other', 'stuff']
      )
    );
    // should log { some: 'other', thing: 'stuff' }

    //8/10/2020
    /**
 * takes in a string
 * returns an object
 * with characters as keys
 * and the number of occurrences as values
 * 
 * how to determine if property is in object:
 * var obj = { someProp: 'some val' }
 * obj.hasOwnProperty('someProp') returns true
 */

// set a key/value pair
obj['secondKey'] = 'second val'

// get a value from an object
obj['secondKey'] // returns 'second val'

function freqTable(str) {
  var obj = {};
  for (var i in str) {
    var character = str[i];
    if (obj.hasOwnProperty(character)) {
      obj[character]++;
    }
    else {
      obj[character] = 1;
    }
  }
  return obj;
}
console.log(freqTable('abac'));

console.log(freqTable('abac')); // logs { a: 2, b: 1, c: 1 }
//                     0123
console.log(freqTable('deffd')); // logs { d: 2, e: 1, f: 2 }


/**
 * takes in a string
 * returns a string
 * with the "words" reversed
 */

function reverseWordOrder(str) {
  var arr = str.split(" "); //--> ['This', 'is', 'a' ,'test']
  var newStr = "";
  for (var i = arr.length - 1; i>0; i--){
    newStr += arr[i] + " ";
  }
  return newStr + arr[0];
  }
  
  console.log(reverseWordOrder('this statement'));
  // should log 'statement this'
  console.log(reverseWordOrder('This is a test'));
  // should log 'test a is This'

  //8/11/2020
  /**
 * param {String} str
 * return {String} with only the last instance of each character
 * NOTE: the character order should be preserved
 */

function dedupe(str) {
  var tempStr ="";
  for (var i=str.length-1; i>=0; i--){
    if (tempStr.includes(str[i]) == false){
      tempStr += str[i];
    }
  } 
  tempStr2="";
  for (var j=tempStr.length-1; j>=0; j--){
    tempStr2 += tempStr[j];
  }
  return tempStr2;
  }
  
  console.log(dedupe('abac')); // should log 'bac'
  console.log(dedupe('Snaps! crackles! pops!')); // should log 'Snrackle ops!'

  function dedupe(str){
    var newObj = {};
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--){
        var character = str[i];
        if (newObj.hasOwnProperty(character) == false){
            newObj[character] = true;
            newStr = character + newStr;
        }
    }
    return newStr;
}

console.log(dedupe('abac')); // should log 'bac'
console.log(dedupe('Snaps! crackles! pops!'));
// should log 'Snrackle ops!


/**
 * param {String} str
 * return {String} with individual "words" reversed
 */

function reverseWords(str) {
  // your code here
}

console.log(reverseWords("hello")); // should log 'olleh'
console.log(reverseWords('this that')); // should log 'siht taht'

//8/12/20
/**
 * param {String} str
 * return {String} with the original "compressed"
 * if the "compressed" version IS NOT shorter,
 * return the original
 */

function encode(str) {
  // your code here
}

console.log(encode('aabbbbbb')); // should log 'a2b6'
console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
console.log(encode('abbbaa')); // should log 'abbbaa'
console.log(encode('abc')); // should log 'abc'


/**
 * param {String} str
 * return {String} with the original "expanded"
 * 
 * parseInt('a') returns NaN
 * parseInt('5') returns 5
 * isNaN('c') returns true
 * isNaN(5) returns false
 */

function decode(str) {
  var newStr="", freStr="", fre=0, prevChar = str[0];
  for (var i = 1; i<=str.length; i++){
    if (isNaN(str[i])){
      for(var j = 0; j < parseInt(freStr); j++){
          newStr +=  prevChar;
      }
      prevChar = str[i];
      freStr="";
    }
    else {
      freStr += str[i];
    }
  }

  return newStr;
}

console.log(decode('a2b6')); // should log 'aabbbbbb'
console.log(decode('a10b10')); // should log 'abbbbbbbbbb'
// loop 1: newStr = a
// loop 2: newStr = a, freStr="1"
// loop 3: newStr = a, freStr="10"
// loop 4: freStr="10", fre=10, 
console.log(decode('a1b10c6')); // should log 'abbbbbbbbbbcccccc'

//8/13/20
/**
 * param {String} str
 * param {Number} num
 * return {String} a new string with the characters
 * rotated to the left by the given number
 * Note: the number can be greater than the string length
 */

function rotateString(str, num) {
  var newStr="", newNum=0;
  newNum = Math.floor(num%str.length);
  console.log("newNum: ",newNum);

  for (var i=str.length-newNum; i<str.length; i++){
    newStr += str[i];
  }
  for (var i=0; i<str.length-newNum; i++){
    newStr += str[i];
  } 
  return newStr;
}

console.log(rotateString('this', 1));
console.log(rotateString('this', 5));
console.log(rotateString('this', 9));

console.log(rotateString('Boris Godunov', 5));


/**
 * param {String} str1
 * param {String} str2
 * return {Boolean} Is the second string a rotation of the first?
 * See if you can optimize once you get it working.
 */

function isRotation(str1, str2) {
  var firstChar = str1[0], firstPos=0, newStr="";
  for (var i=0; i<str2.length; i++ ){
    if (str2[i]==firstChar){
      if (str2[i] !=str2[i-1]){
        firstPos =i;
      }
    }
    console.log("firstPos:",firstPos);
  }
  for (var i=firstPos; i<str2.length; i++ ){
    newStr += str2[i];
  } //Boris Go
  for (var i=0; i<firstPos; i++ ){
    newStr += str2[i];
  } //Boris Godunov
  console.log("newStr: ",newStr);
  return newStr == str1;
}

console.log(isRotation('Boris Godunov', 'dunovBoris Go')); 
console.log(isRotation('BBBBoris Godunov', 'dunovBBBBoris Go'));
console.log(isRotation('Boris Godunov', 'vBoris Goduno'));
console.log(isRotation('Boris Godunov', 'oris GodunovB'));
// should log true

console.log(isRotation('hello world', 'llo worldHe'));
// should log false

function isRotation(str1, str2) {
  // string lengths do not match
  if (str1.length != str2.length){
      return false;
  }

  for(var i = 0; i < str1.length; i++){
      // Rotate str1 by i and compare with str2 each time
      if (rotateString(str1, i) == str2){
          // If the if-statement ever passes, we can exit the function with a true.
          return true;
      }
  }
  // If the if-statement never passed, we exit the function with a false.
  return false;
}

console.log(isRotation('Boris Godunov', 'dunovBoris Go'));
// should log true

console.log(isRotation('hello world', 'llo worldHe'));
// should log false


//8/14/20
/**
 * @param {Array<Object>} newInv new inventory
 * @param {Array<Object>} currentInv current inventory
 * @return {Array<Object>} the current inventory after
 * updating it with the new inventory
 * new items get added; existing items have quantities changed
 */

//Howard's group: 
function updateInventory(newInv, currentInv) {
  for (var new_item of newInv){
      var found_item = false;
      for (var curr_item of currentInv){
          if (new_item['name'] === curr_item['name']){
              curr_item['quantity'] += new_item['quantity'];
              found_item = true;
              break;
          }
      }
      if (!found_item){
          currentInv.push(new_item);
      }
  }
  return currentInv;
} 

console.log(updateInventory([{name: 'item',quantity: 2},{name: 'item2',quantity: 3}], [{name: 'item',quantity: 2}]));


function trim(str) {
  // console.log("str length:",str.length);
  var startPos = 0, endPos=0, newStr="";
  if ((str[0] != " " && str[0] != "\t" && str[0] != "\n")){
    startPos = 0;
  }
  else{
    for (var i=1; i<str.length-1; i++){
    // console.log("----------IN LOOP:",i)
      if ((str[i-1] == " " || str[i-1] == "\t" || str[i-1] == "\n") && (str[i] != " " && str[i] != "\t" && str[i] != "\n")){
        // console.log("is prev blank?", (str[i-1] == " " || str[i-1] == "\t" || str[i-1] == "\n"))
        // console.log("is current not blank?", (str[i] != " " || str[i] != "\t" || str[i] != "\n"))
        startPos = i;
        // console.log("startPos: ",startPos)
      }
    }
  }
  if ((str[str.length-1] != " " && str[str.length-1] != "\t" && str[str.length-1] != "\n")){
  endPos = str.length-1;
  }
  else{
    for (var i=str.length-1; i>=0; i--){
      if ((str[i+1] == " " || str[i+1] == "\t" || str[i+1] == "\n") && (str[i] != " " && str[i] != "\t" && str[i] != "\n")){
        endPos = i;
        // console.log("endPos: ",endPos)
      }
    }
  }
  for (var j = startPos; j<=endPos; j++){
    newStr += str[j];
  }
  return newStr;
}

console.log(trim('  this   ')); // should log 'this'
console.log(trim('        multiline')); // should log 'multiline'
console.log(trim('this that')); // should log 'this that'

//short version, without console.log
function trim(str) {
  var startPos = 0, endPos=0, newStr="";
  if ((str[0] != " " && str[0] != "\t" && str[0] != "\n")){
    startPos = 0;
  }
  else{
    for (var i=1; i<str.length-1; i++){
      if ((str[i-1] == " " || str[i-1] == "\t" || str[i-1] == "\n") && (str[i] != " " && str[i] != "\t" && str[i] != "\n")){
        startPos = i;
      }
    }
  }
  if ((str[str.length-1] != " " && str[str.length-1] != "\t" && str[str.length-1] != "\n")){
  endPos = str.length-1;
  }
  else{
    for (var i=str.length-1; i>=0; i--){
      if ((str[i+1] == " " || str[i+1] == "\t" || str[i+1] == "\n") && (str[i] != " " && str[i] != "\t" && str[i] != "\n")){
        endPos = i;
      }
    }
  }
  for (var j = startPos; j<=endPos; j++){
    newStr += str[j];
  }
  return newStr;
}

console.log(trim('  this   ')); // should log 'this'
console.log(trim('        multiline')); // should log 'multiline'
console.log(trim('this that')); // should log 'this that'


// ----------------------------- Shorter version
function trim(str) {
  var blank = {" ": 1, "\t": 1, "\n": 1 };
  var startPos = 0, endPos=0, newStr="";
  if (blank.hasOwnProperty(str[0]) == false){
    startPos = 0;
  }
  else{
    for (var i=1; i<str.length-1; i++){
      if ((blank.hasOwnProperty(str[i-1])) && (blank.hasOwnProperty(str[i]) == false)){
        startPos = i;
      }
    }
  }
  if (blank.hasOwnProperty(str[str.length-1]) == false){
    endPos = str.length-1;
  }
  else{
    for (var i=str.length-1; i>=0; i--){
      if ((blank.hasOwnProperty(str[i+1])) && (blank.hasOwnProperty(str[i]) == false)){
        endPos = i;
      }
    }
  }
  for (var j = startPos; j<=endPos; j++){
    newStr += str[j];
  }
  return newStr;
}

console.log(trim('  this   ')); // should log 'this'
console.log(trim('        multiline')); // should log 'multiline'
console.log(trim('this that')); // should log 'this that'



/**
 * param {String} str1
 * param {String} str2
 * return {Boolean} Is the second string an anagram of the first?
 * Anagram: characters can be rearranged to make the same string
 */

// long version
function freqTable(str) {
  var obj = {};
  for (var i in str) {
    var character = str[i];
    if (obj.hasOwnProperty(character)) {
      obj[character]++;
    }
    else {
      obj[character] = 1;
    }
  }
  return obj;
}
// console.log(freqTable('Yes'));
// console.log(freqTable('seY')); 
// console.log(freqTable('eYs')); 

function isAnagram(str1, str2) {
  var obj1 = freqTable(str1), obj2 = freqTable(str2);
  // console.log("obj1: ",freqTable(str1));
  // console.log("obj2: ",freqTable(str2));
  // console.log("obj1 length: ",Object.keys(obj1).length);
  // console.log("obj2 length: ",Object.keys(obj2).length);
  var check = false;
  if (Object.keys(obj1).length == Object.keys(obj2).length){
    // console.log("in if");
    for (var key in obj1){
      if (obj2.hasOwnProperty(key) && obj1[key] == obj2[key]){
        check = true;
      }
    }
  }
   return check;
}
console.log(isAnagram('Yes', 'eYs')); // should log true
console.log(isAnagram('silent', 'listen')); // should log true
console.log(isAnagram('ono', 'noa'));

// ------------------------------short version
function freqTable(str) {
  var obj = {};
  for (var i in str) {
    var character = str[i];
    if (obj.hasOwnProperty(character)) {
      obj[character]++;
    }
    else {
      obj[character] = 1;
    }
  }
  return obj;
}

function isAnagram(str1, str2) {
  var obj1 = freqTable(str1), obj2 = freqTable(str2);
  var check = false;
  if (Object.keys(obj1).length == Object.keys(obj2).length){
    for (var key in obj1){
      if (obj2.hasOwnProperty(key) && obj1[key] == obj2[key]){
        check = true;
      }
    }
  }
   return check;
}
console.log(isAnagram('Yes', 'eYs')); // should log true
console.log(isAnagram('silent', 'listen')); // should log true
console.log(isAnagram('ono', 'noa'));


//8/17/2020
/**
 * param {number[]} arr
 * return {boolean}
 * Is there a point between indices
 * where the summed values on each side are equal?
 */

function balancePoint(arr) {
  var sumForward = 0, sumBackward = 0, sumAll = 0;
  var check = false;
  for (var i =0; i<arr.length; i++){
    sumAll += arr[i];
  }
  for (var j =0; j<arr.length; j++){
    // console.log("-------Beg of loop: ", j)
    sumForward += arr[j];
    sumBackward = sumAll - sumForward;
    // console.log("sumForward: ", sumForward);
    // console.log("sumBackward: ", sumBackward);
    if (sumForward == sumBackward){
      // console.log("------inside if")
      check = true;
      // console.log("result: ", result);
    }
  }
  return check;
}

console.log(balancePoint([1, 2, 3, 4])); // should log false
// i = 0            sumF = 1, sumR = arr[4-1-0]    sumR = arr[3]=4
console.log(balancePoint([3, 4, 2, 5]));
// should log true (between indices 1 and 2)


/**
 * param {number[]} arr
 * return {number}
 * if there is an index in which the summed values
 * on each side are equal, return it
 * otherwise, return -1
 */

function balanceIndex(arr) {
  var sumForward = 0, sumBackward = 0, sumAll = 0;
  var result = -1;
  for (var i =0; i<arr.length; i++){
    sumAll += arr[i];
  }
  for (var j =1; j<arr.length; j++){
    // console.log("-------Beg of loop: ", j)
    sumForward += arr[j-1];
    sumBackward = sumAll - sumForward - arr[j];
    // console.log("sumForward: ", sumForward);
    // console.log("sumBackward: ", sumBackward);
    if (sumForward == sumBackward){
      // console.log("------inside if")
      result = j;
      // console.log("result: ", result);
    }
  }
  return result;
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // should log 2
console.log(balanceIndex([9, 9])); // should log -1

//8/18/2020
/**
 * param {number[]} sortedArr array of SORTED integers
 * param {number} searchVal
 * return {boolean}
 * 
 * Is the given value in the array?
 * DON'T ITERATE THROUGH THE ENTIRE ARRAY
 */

function binarySearch(sortedArr, searchVal) {
  var check = false;
  var startIndex = 0, endIndex = sortedArr.length-1;
  var midPoint = Math.floor([sortedArr.length/2])
  if (sortedArr[midPoint] == searchVal){
    return true;
  }
  else if (sortedArr[midPoint] > searchVal){
    if (sortedArr[midPoint-1] == searchVal){check = true;}
    else if (sortedArr[midPoint-1] < searchVal){check = false;}
    else if (sortedArr[midPoint-1] > searchVal){
      endIndex = midPoint-1;
      midPoint = Math.floor((endIndex-startIndex)/2);
      if (sortedArr[midPoint] == searchVal){check = true;}
      else if (sortedArr[midPoint] < searchVal){check = false;}
      else if (sortedArr[midPoint] > searchVal){
        for (var i=midPoint-1; i>=0; i--){
          if (sortedArr[i] == searchVal){check = true;}
        }
      }
    }
  }
  else if (sortedArr[midPoint] < searchVal){
    if (sortedArr[midPoint+1] == searchVal){check = true;}
    else if (sortedArr[midPoint+1] > searchVal){check = false;}
    else if (sortedArr[midPoint+1] < searchVal){
      startIndex = midPoint+1;
      midPoint = Math.floor((endIndex-startIndex)/2);
      if (sortedArr[midPoint] == searchVal){check = true;}
      else if (sortedArr[midPoint] > searchVal){check = false;}
      else if (sortedArr[midPoint] < searchVal){
      for (var i =midPoint+1; i<sortedArr.length; i++){
        if (sortedArr[i] == searchVal){check = true;}
      }
    }
  }
  }
  return check;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 4, 5], 3));
console.log(binarySearch([1, 2, 4, 5, 6, 7, 9], 3))
//Howard's group:
function binarySearch(sortedArr, searchVal) {
  // your code here
  var lowInd = 0;
  var highInd = sortedArr.length - 1;

  while(lowInd <= highInd){
    var midInd = Math.floor((lowInd + highInd) / 2);
    if(searchVal == sortedArr[midInd]){
      return true;
    }

    if(sortedArr[midInd] > searchVal){
      highInd = midInd - 1;
    }
    else if(sortedArr[midInd] < searchVal){
      lowInd = midInd + 1;
    }
  }

  return false;
}


/**
 * BONUS: Once done, create this version
 * returns the number of occurrences of the value
 * 
 * @param {number[]} sortedArr array of SORTED integers
 * @param {number} searchVal
 * @return {number} the number of occurrences of the searched for value
 */
//Ranil's group
function binarySearchBonus(sortedArr, searchVal) {
  // your code here
  /*
        st
    st  en  
     0       2    3       5     mid= ( (0 + 5) / 2)= 2.5    Math.floor(2.5) = 2
    [1   2   3    3  55  76]   3    mid= (0 + 1 / 2) = .5 Math.floor(.5) = 0


*/    
    var count = 0;
    var start = 0;
    var end = sortedArr.length - 1;
    var mid = Math.floor( (start + end ) /2);

    var found = false;
    while  ( !found ) {

        // found it
        if (sortedArr[mid] == searchVal)  {
          count = 1;  
          // right  
          for (var i=mid + 1; i < sortedArr.length; i++ )
              if (sortedArr[i] == searchVal) 
                  count += 1;
              else break;
          // left
          for (var i=mid - 1; i >= 0; i-- )
              if (sortedArr[i] == searchVal) 
                  count += 1;
              else break;  

          console.log ('found it 1');
          return count;
        }

        // array element in midpoint is greater
        else if (sortedArr[mid] > searchVal) {
            // start will be same
            end = mid - 1;
            mid = Math.floor( (start + end ) /2);
        }
        // array element in midpoint is less
        else {
            // end will be same
            start = mid + 1;
            mid = Math.floor( (start + end ) /2);
        }

        // exit when both markers are on same index
        if (start >= end) break;
    }


    // still check if we found it
    if (sortedArr[start] == searchVal) {
        console.log ('found it 2');
        count = 1;
        for (var i=start + 1; i < sortedArr.length; i++ )  {
          if (sortedArr[i] == searchVal) 
              count += 1;
          else break;
          for (var i=start - 1; i >= 0; i-- )
                if (sortedArr[i] == searchVal) 
                    count += 1;
                else break;  

        }

      return count; 
    } 

  return 0;  
}




console.log(binarySearchBonus([1, 2, 3, 4, 5], 3));
// should log 1

console.log(binarySearchBonus([1, 2, 4, 4, 4, 5], 4));
// should log 3

console.log(binarySearchBonus([1, 2, 4, 4, 5], 6));
// should log 3

//8/19/2020
/**
 * @param {number[]} sortedArr a SORTED array of numbers
 * @return {number[]} the same OR a new array "deduped"
 * 
 * BONUSES:
 * O(n): no nested loops, new array okay X
 * In place (`no` new array)
 * In place and O(n): no nested loops
 * Keep it O(n) even if unsorted
 */

function removeDuplicates(sortedArr) {
  var newArr=[];
  for (var i=0; i<sortedArr.length; i++){
    if (sortedArr[i] != sortedArr[i+1] ){
      newArr.push(sortedArr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
// should log [1, 2, 3, 4, 5]
console.log(removeDuplicates([5, 6, 5, 7, 8, 6, 4, 2, 10]));

function removeDuplicates(sortedArr) {
  for (var i=1; i<sortedArr.length; i++){
    if (sortedArr[i-1] == sortedArr[i] ){
      
    }
  }
  return sortedArr;
}

/**
 * @param {number[]} intArr array of integers
 * @return {number|number[]}
 * 
 * if one number shows up with the highest frequency, return it
 * if all numbers show up the same number of times, return []
 * if multiple numbers have the same frequency, return them in an array
 */

function findAllModes(intArr) {
  // your code here
  // To get a frequency table for the array
  var freqTable = {}, newArr=[];
  for(var i = 0; i < intArr.length; i++){
    if(freqTable.hasOwnProperty(intArr[i])){
      freqTable[intArr[i]]++;
    }
    else{
      freqTable[intArr[i]] = 1;
    }
  }
  // To find the highest frequency
  var maxFreq = 0;
  for (var key in freqTable){
    if (maxFreq < freqTable[key]){
      maxFreq = freqTable[key]; // maxFreq=2
    }
  }
  
  // Set a flag for when we find an element that doesn't get appended to the newArr
  var found = false;
  // Loop through the freqTable and compare with maximum frequency we found from previous loop
  for (var key in freqTable){
    if (maxFreq == freqTable[key]){
      newArr.push(parseInt(key));
    }
    else {
      found = true;
    }
  }
  // if newArr only has one value that means there's only one highest frequency: --> return this newArr
  if (newArr.length == 1){
    return newArr[0];
  }
 

  // if flag is true, that means at least one value in the given array has lower frequency than other values. Also means that this newArr contains values with the same frequency: --> return this newArr
  // if flag is false, that means all values in the given array have the same frequency: --> return an empty array
  return found ? newArr: [];

  // if(found){
  //   return newArr
  // }
  // else{
  //   return [];
  // }

}

console.log(findAllModes([1, 2, 3, 4])); // should log []
console.log(findAllModes([1, 1, 2, 2, 3, 3])); // should log []
console.log(findAllModes([1, 1, 3, 4])); // should log 1
console.log(findAllModes([1, 1, 3, 4, 4])); // should log [1, 4]
//freqTable ={"1": 2, "3":1, "4":2}
//                   maxFreq=2
//                  newArr = ["1", "4"]

//8/24/2020
/**
 * @param {number[]} intArr an array of integers
 * @param {number} i index, which defaults to 0
 * @return {number} the sum of all the elements
 */


function rSumArray(arr, i = 0) {
  if (i == arr.length) {
      return 0;
  }
  return arr[i] + rSumArray(arr, i + 1);
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2

/**
 * @param {number} num
 * @return {number} the sum from one up to and including the number
 */

function rSigma(num) {

  /* base case */
  
  if (num == 0) {
    return num;
  }
  
  return num + rSigma(num - 1);
  }
  
console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)


//Morley's lecture code
function rLoopThroughAndLog (arr, i=0){
  //base case
  // this is where we will stop the recursion
  if (i == arr.length) return;
  console.log(arr[i]);
  //this is the recursive call
  // the function calls itself
  rLoopThroughAndLog(arr, i+1);
  // the i + 1 is what we call "forward movement"
}
//8/25/20
/**
 * @param {number[]} intArr an array of integers
 * @param {number} i index, which defaults to 0
 * @return {number} the sum of all the elements
 */

function rSumArray(arr, i = 0) {
  if (i == arr.length) {
      return 0;
  }
  return arr[i] + rSumArray(arr, i + 1);
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2


/**
 * @param {number} num
 * @return {number} the sum from one up to and including the number
 */

function rSigma(num) {

  /*  base case */
  
    if  (num == 0)  { 
      return num; 
    }
  
    return num + rSigma(num - 1);
  
  }
  
  console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
  console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)

  //8/26/2020
/**
 * @param {number[]} sortedArr a SORTED array of numbers
 * @param {number} searchVal a value to search for
 * @return {boolean} Is the value in the array?
 * BONUS: Do it without slice
 */

function rBinarySearch(sortedArr, searchVal) {
  // base case
  if(sortedArr.length == 0){
      return false;
  }

  var lowInd = 0;
  var highInd = sortedArr.length - 1;
  var midInd = Math.floor((lowInd + highInd) / 2);

  // base case
  if (searchVal == sortedArr[midInd]) return true;

  if(searchVal > sortedArr[midInd]){
      lowInd = midInd + 1;
  }
  else{
      highInd = midInd - 1;
  }

  return rBinarySearch(sortedArr.slice(lowInd, highInd + 1), searchVal)
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// [1, 2, 3, 4, 5].slice(1, 4) returns [2, 3, 4], which is a NEW ARRAY
// [1, 2, 3, 4, 5].slice(2) returns [3, 4, 5], which is a NEW ARRAY

console.log(rBinarySearch([1, 2, 3, 4, 5], 3)); // should log true
//                               2
console.log(rBinarySearch([1, 2, 4, 5], 3)); // should log false





/**
 * @param {string} str a string to reverse
 * @return {string} a new string with the characters reversed
 */

/**
 * @param {string} str a string to reverse
 * @return {string} a new string with the characters reversed
 */

function rStringReverse(str) {


  // base case, exit situation
  if  (str.length <= 1)
      return str;

  //                hello          ello                 h
  //                                llo                eh
  //                                 lo               leh
  //                                  o              lleh
  //                                                olleh       

  return  rStringReverse(str.slice(1) ) + str[0]; 

}

console.log(rStringReverse('hello')); // should log 'olleh'
console.log(rStringReverse('world')); // should log 'dlrow'


//8/27/20
/**
 * @param {number} num an integer
 * @return {number} a ONE-DIGIT integer
 * sum all the digits until the answer has only ONE DIGIT
 */

function rSumToOneDigit(num) {
  // base case
  if (num.toString().length == 1){
      return num;
  }
  var sum = 0;
  for (var i = 0; i < num.toString().length; i++){
      sum += parseInt(num.toString()[i]);
  }
  return rSumToOneDigit(sum);
}

console.log(rSumToOneDigit(19));
// should log 1: 1 + 9 = 10 -> 1 + 0 = 1

console.log(rSumToOneDigit(999));
// should log 9: 9 + 9 + 9 = 27 -> 2 + 7 = 9

//Nick's group: 
function rSumToOneDigit(num) {

  return (num - 1) % 9 + 1;
  
  }
  
  console.log(rSumToOneDigit(999));


/**
 * @param {string} str the starting string
 * @param {string[]} anagrams an array of anagrams (default value is empty)
 * @param {string} partial a partial solution (default value is empty)
 * @return {string[]} an array of anagrams made from the original string
 * NOTE: the order of the individual strings inside the
 * returned array is unimportant; just make sure you get them all
 */

function stringAnagrams(str, anagrams = [], partial = '') {
  // your code here
  if(str.length === 0) {
    // do something, base case
    if(partial.length !== 0) {
      anagrams.push(partial);
    }

  } else {
    // forward movement and recursion
    for(var i = 0; i < str.length; i++) {
      var char = str[i];

      // creates a new string including everything but the character
      var newStr = str.slice(0, i) + str.slice(i + 1);
      var newPartial = partial + char;

      stringAnagrams(newStr, anagrams, newPartial);
    }

  }

  return anagrams;
}

// 'something'.slice(2, 4) returns a new string 'me'
// 'something' + 'else' returns a new string 'somethingelse'

console.log(stringAnagrams('mi'));
// should log ['mi', 'im'] or ['im', 'mi']

console.log(stringAnagrams('mil'));
// should log ['mil', 'mli', 'iml', 'ilm', 'lim', 'lmi']

//8/28/20
/**
 * @param {number} num1 an integer
 * @param {number} num2 an integer
 * @return {number} an integer
 * remember finding a common denominator for fraction addition/subtraction?
 */

function lowestCommonMultiple(num1, num2, base1 = num1, base2 = num2) {
  // your code here
  if (num1 == num2) return num1;

  if (num1 > num2) {
      return lowestCommonMultiple(num1, num2 + base2, base1, base2);
  }
  return lowestCommonMultiple(num1 + base1, num2, base1, base2);
}


console.log(lowestCommonMultiple(3, 4)); // should log 12
console.log(lowestCommonMultiple(4, 6)); // should log 12



/**
 * @param {string} str a string consisting of any number of these characters: 0, 1, ?
 * @param {string[]} solutions an array of "expanded" strings (default value is empty)
 * @param {string} partial a "partial" solution string
 * @return {string[]} the array of solutions
 * with every `?` replaced by both a 0 and a 1
 * NOTE: the order of the solutions in the output array DOES NOT MATTER
 */

function binaryStringExpansion(str, solutions = [], partial = '') {
  // your code here
}

// 'something'.indexOf('m') returns 2
// 'something'.indexOf('b') returns -1 since it's not in the string
// 'something'.slice(2) returns a new string: 'mething'
// 'something'.slice(2, 5) returns a new string: 'met'

console.log(binaryStringExpansion('001?0'));
// should log ['00100', '00110']

console.log(binaryStringExpansion('001?0?'));
// should log ['001000', '001001', '001100', '001101']

//8/31/20
// Bubble Sort Array
// For review, create a function that uses
// BubbleSort to sort an unsorted array in-place.
function bubbleSort(arr){
  for (var j = 0; j<arr.length; j++){
    var isSorted = true;
    for (var i=0; i<arr.length-1; i++){
      isSorted = false;
      if (arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
    if (isSorted){ return;}
  }
  return arr;
}

console.log(bubbleSort([5,9,3,1,2,4,3,7,1,0]));
console.log(bubbleSort([4,7,8,3,4,1,8,6]));

//9/1/20
// Stable
// It is stalbe if when there are duplicates, the duplicates are left in original order relative to one another
// Making a sort stable incurs overhead (takes more time)
// Click the above link for an example of when stability is needed
function insertionSort(arr){
  for (let j = 1; j<arr.length; j++){
    for (let i = j; i>=0; i--){
      if (arr[i] < arr[i-1]){
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
//                      [2, 9, 5, 6, 4, 3, 7, 10, 1, 8]
//                      [2, 5, 9, 6, 4, 3, 7, 10, 1, 8]
//                      [2, 5, 6, 9, 4, 3, 7, 10, 1, 8]
//                      [2, 5, 6, 4, 9, 3, 7, 10, 1, 8]
//                      [2, 5, 6, 4, 3, 9, 7, 10, 1, 8]
//                      [2, 5, 6, 4, 3, 7, 9, 10, 1, 8]
//                      [2, 5, 6, 4, 3, 7, 9, 10, 1, 8]
//                      [2, 5, 6, 4, 3, 7, 9, 1, 10, 8]
//                      [2, 5, 6, 4, 3, 7, 9, 1, 8, 10]
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("numsOrdered: ",insertionSort(numsOrdered));
console.log("numsRandomOrder:", insertionSort(numsRandomOrder));
console.log("numsReversed:", insertionSort(numsReversed));
console.log("expected:", insertionSort(expected));

//from Neil:
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    // save the current 'target' so this space is available to use for shifting
    let numToInsert = nums[i];
    let leftIdx = i - 1;

    while (leftIdx >= 0 && nums[leftIdx] > numToInsert) {
      // shift to the right because it's greater than the item we are going to insert
      nums[leftIdx + 1] = nums[leftIdx];
      leftIdx--;
    }
    // shifting complete, insert position located
    nums[leftIdx + 1] = numToInsert;
  }
  return nums;
}

function insertionSortSwap(nums) {
  for (let i = 1; i < nums.length; i++) {
    let currIdx = i; // to avoid altering i directly
    let leftIdx = currIdx - 1; // compare to the left

    while (leftIdx >= 0 && nums[leftIdx] > nums[currIdx]) {
      // destructure swap notation
      [nums[leftIdx], nums[currIdx]] = [nums[currIdx], nums[leftIdx]];

      // curr got swapped to the left, so currIdx is now 1 to the left
      currIdx--;
      leftIdx = currIdx - 1;
    }
  }
  return nums;
}
/* 
  Stable sort

  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case:    O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case:   O(n log(n)) linearithmic

  Space: O(n) linear

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
*/

// merge
const sortedA = [1, 2, 4, 5, 6, 9];
const sortedB = [3, 7, 8, 10];
const expectedMerge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Merges two already sorted arrays into a new sorted array
 * @param   {Array<number>} left
 * @param   {Array<number>} right
 *          @left and @right are sorted
 * @return  {Array<number>}
 *          A new sorted array containing all the elements of @left and @right
 *
 * Time:    O(n + m) -> O(n) linear
 *          n = left.length, m = right.length.
 *          Every item from each array is visited once.
 * Space:   O(n + m) => O(n) linear
 */
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
  while (indexLeft < left.length) {
    result.push(left[indexLeft]);
    indexLeft++;
  }

  while (indexRight < right.length) {
    result.push(right[indexRight]);
    indexRight++;
  }

  return result;

  // one liner version of adding in any left over items
  // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}


//9/2/20
// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split and merged
 * @param   {Array<number>} nums
 *          In any order
 * @return  {Array<number>}
 *          New sorted array
 * Best:    O(n log(n)) linearithmic
 * Avg:     O(n log(n)) linearithmic
 * Worst:   O(n log(n)) linearithmic
 */
function mergeSort(nums) {
  if (nums.length === 1) {
    // return once we hit an array with a single item
    return nums;
  }

  const middle = Math.floor(nums.length / 2); // get the middle item of the array rounded down
  const left = nums.slice(0, middle); // items on the left side
  const right = nums.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort };
 //9/3/20
 /* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition

  Steps:

  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx

  2. Partition the array IN PLACE such that all values less than the pivot value are to the left of it
  and all values greater than the pivot value are to the right (not perfectly sorted)

  3. return: new idx of the pivot value or the index where the left section of smaller items ends

  "Choosing a random pivot minimizes the chance that you will encounter worst-case O(n2) performance (always choosing first or last would cause worst-case performance for nearly-sorted or nearly-reverse-sorted data). Choosing the middle element would also be acceptable in the majority of cases." https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
// nums1 example if 3 was pivot value
// doesn't have to be this exactly but this is an acceptable answer: [2, 3, 14, 8, 11, 7]
const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the @nums array by mutating it by selecting the number at the middle index (pivot) then arranges
 * all numbers less than the pivot to be to it's left and all larger numbers to the right of the pivot
 * @param   {Array<number>} nums
 *          In any order
 * @param   {number} left
 *          Index indicating the start of the slice of @nums being processed
 * @param   {number} right
 *          Index indicating the end of the slice of @nums being processed
 * @return  {Array<number>}
 *          @nums after being partitioned
 * Time:    O(n) linear, n = nums.length
 * Space:   O(1) constant
 * Hoare’s partitioning scheme, named for Sir Charles Anthony Richard Hoare, who developed the quicksort algorithm in 1959.
 * does fewer swaps than Lomuto
 * NOTE that in this scheme, the pivot’s final location is not necessarily at the index that was returned (some edge cases)
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
  const midIdx = Math.floor((left + right) / 2);
  const pivotVal = nums[midIdx];

  while (left < right) {
    while (nums[left] < pivotVal) {
      left++;
    }

    while (nums[right] > pivotVal) {
      right--;
    }
    // array destructure swap syntax
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return left;
}

module.exports = { partition };

console.log(partition(nums1));
// console.log(partition(nums2));

module.exports = { partition };

//9/4/20
/* 
  Visualization https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Create a function that uses yesterday’s partition to fully sort an array in-place.
  Unstable sort
  
  Time Complexity
    - Best: O(n log(n)) linearithmic
    - Average: O(n log(n)) linearithmic
    - Worst: O(n^2) quadratic
  
  Space: O(1) constant
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the last idx
  - later these params will be used to specify a sub section of the array to partition
  Steps:
    - start by partitioning the full array (use the previously built partition algo)
    - then partition the left side of the array (left of the returned partition idx) and the right side (right of the returned partition idx), recursively
*/

const { partition } = require("./05_partition");

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts @nums by mutating the array
 * @param   {Array<number>} nums
 *          In any order
 * @param   {number} left
 *          Index indicating the start of the slice of @nums being processed
 * @param   {number} right
 *          Index indicating the end of the slice of @nums being processed
 * @return  {Array<number>}
 *          @nums after being sorted
 * Best:    O(n log(n)) linearithmic
 * Average: O(n log(n)) linearithmic
 * Worst:   O(n^2) quadratic
 */
function quickSort(nums, left = 0, right = nums.length - 1) {
  if (left < right) {
    let pivotIndex = partition(nums, left, right);
    quickSort(nums, left, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, right);
  }
  return nums;
}

module.exports = { quickSort };

console.log(quickSort(nums1));
console.log(quickSort(expected1));
console.log(quickSort(nums2));

//9/10/20
// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

/**
 * Finds all the sets of consecutive numbers that add up to the @targetSum
 * @param {Array<number>} nums - Any order.
 * @param {number} targetSum
 * @return {Array<Array<number>>} - 2d array where each nested array
 *         is a set of consecutive numbers that add up to the @targetSum
 *         Consecutive in this context means the numbers whose indexes are one after the other only.
 * Time:   O(...)
 * Space:  O(...)
 */

 // my solution: not counting for bonus case yet. and result is duplicated
function findConsqSums(nums, targetSum) {
  let result = [];
  for (let j=0; j<nums.length; j++){
    // console.log("------------j:", j);

    let sum = 0, i=j, tempArr = [];

    while (i<nums.length && sum <= targetSum){
      if ((sum + nums[i]) <= targetSum) {
        sum += nums[i];
        tempArr.push(nums[i]);
      }
      // console.log("i:", i, ", sum:", sum, ",tempArr:", tempArr);
      i++;
    }
    if (sum == targetSum){
      result.push(tempArr);
    }
  }
  return result;
  
}
console.log(findConsqSums(nums1, sum1));
console.log(findConsqSums(nums2, sum2));

module.exports = { findConsqSums };

//9/11/20
// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the numbers that add up to @targetSum
 * @param  {Array<number>} nums - Any order
 * @param  {number} targetSum
 * @return {Array<number>}
 *         The two indexes of the numbers in @nums that add up to @targetSum
 * Time:   O(...)
 * Space:  O(...)
 */
function twoSum(nums, targetSum) {
  let sum=0;
  let i=0, result = []; 
  while (sum <= targetSum && i < nums.length){
      if (nums[i] < targetSum && (sum + nums[i]) <= targetSum) {
          sum += nums[i];
          result.push(i);
        }
      i++;
  }
  if (sum > targetSum){
      result.pop();
  }
  if (sum == targetSum){
      return result;
    }
  return result;

}

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
console.log(twoSum(nums1, targetSum1));

//the above doesn't work for this case: 
//const nums1 = [2, 6, 11, 7, 15];
//const targetSum1 = 9;


module.exports = { twoSum };

function twoSumV2(nums, targetSum) {
  if (nums.length <= 1) {
      return;
  }
  // Loop for first number

  // k = 0, 1, 2
  // k = 0, p = 1, 2, 3
  // k = 1, p = 2, 3
  // k = 2, p = 3
  for (let k = 0; k < nums.length - 1; k++) {
      // Loop for second number
      for (let p = k+1; p < nums.length; p++) {
          if (nums[k]+nums[p]==targetSum) { // Target sum met
              return [k, p];
          }
      }
  }
  return false; // Not met
}
//9/14/20
/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string

  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.

  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * @param   {string} tableName
 * @param   {Object} columnValuePairs
 * @return  {string}
 *          A string formatted as a SQL insert statement
 *          where the columns and values are extracted
 *          from @columnValuePairs
 */
function insert(tableName, columnValuePairs) {
  let keyStr="( ", valStr="( ";
  for (key of Object.keys(columnValuePairs)){
    keyStr += key + ", ";
  }
  for (val of Object.values(columnValuePairs)){
    if (typeof(val) == "string"){
      valStr += '"' + val + '"' + ", ";
    }
    else {valStr += val + ", ";}
  }
  let newKeyStr = keyStr, newValStr =valStr;
  if (keyStr.length > 3) {newKeyStr = keyStr.slice(0, (keyStr.length-2));}
  if (newValStr.length > 3) {newValStr = valStr.slice(0, (valStr.length-2));}
  newKeyStr += " )";
  newValStr += " )";
  return "INSERT INTO "+ tableName + newKeyStr +" VALUES "+ newValStr;
}

// console.log(insert(table, insertData1));
console.log(insert(table, {}));
// console.log(insert(table, insertData2));

function insertFunctional(table, insertData) {
  let keys = Object.keys(insertData);
  return `INSERT INTO ${table} (${keys.join(", ")}) VALUES (${keys.map(x => typeof(insertData[x]) === "string" ? `'${insertData[x]}'` : insertData[x]).join(", ")})`;
}
// console.log(insertFunctional(table, insertData1));
// console.log(insertFunctional(table, {}));
// console.log(insertFunctional(table, insertData2));


module.exports = {
  insert,
};/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string

  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.

  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * @param   {string} tableName
 * @param   {Object} columnValuePairs
 * @return  {string}
 *          A string formatted as a SQL insert statement
 *          where the columns and values are extracted
 *          from @columnValuePairs
 */
function insert(tableName, columnValuePairs) {
  let keyStr="( ", valStr="( ";
  for (key of Object.keys(columnValuePairs)){
    keyStr += key + ", ";
  }
  for (val of Object.values(columnValuePairs)){
    if (typeof(val) == "string"){
      valStr += '"' + val + '"' + ", ";
    }
    else {valStr += val + ", ";}
  }
  let newKeyStr = keyStr, newValStr =valStr;
  if (keyStr.length > 3) {newKeyStr = keyStr.slice(0, (keyStr.length-2));}
  if (newValStr.length > 3) {newValStr = valStr.slice(0, (valStr.length-2));}
  newKeyStr += " )";
  newValStr += " )";
  return "INSERT INTO "+ tableName + newKeyStr +" VALUES "+ newValStr;
}

// console.log(insert(table, insertData1));
console.log(insert(table, {}));
// console.log(insert(table, insertData2));

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
function insertFunctional(table, insertData) {
  let keys = Object.keys(insertData);
  return `INSERT INTO ${table} (${keys.join(", ")}) VALUES (${keys.map(x => typeof(insertData[x]) === "string" ? `'${insertData[x]}'` : insertData[x]).join(", ")})`;
}
console.log(insertFunctional(table, insertData1));
console.log(insertFunctional(table, {}));
console.log(insertFunctional(table, insertData2));


module.exports = {
  insert,
};

/* 
  Recreate Object.entries method

  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array

  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = { firstName: "Foo", lastName: "Bar", age: 13 };
obj1.__proto__.keyOnProto = "val from proto";
const expected1 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];

/**
 * Returns a 2d array of key value pairs from @obj
 * @param   {Object} obj
 * @typedef {Array<Array<string, any>>} output
 *          The nested arrays should look like: [key, val]
 * @return  {output}
 */
function entries(obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
  
}
console.log(entries(obj1));

//9/15/20
/* 
Given a search criteria object whose values will only be primitives (ints, strings, bools)
and a list of objects,

return any object that matches all the key value pairs in the search criteria object

Bonus: write a 2nd solution using build in methods to practice functional programming
*/

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
  firstName: "Bob",
  age: 31,
};
const expected1 = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
  lastName: "Smith",
};
const expected2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects from @collection that match the @criteria
 * @param   {Object} criteria
 * @param   {Array<Object>} collection
 * @return  {Array<Object>}
 *          The found objects.
 * Time:    O()
 * Space:   O()
 */
function findObjects(criteria, collection) {
  let result = [], check = false;
  for (let i = 0; i<collection.length; i++){
    // console.log("------outer loop: ",i);
    for (key of Object.keys(criteria)){
      // console.log("------inner loop: ");
      // console.log("key: ",key);
      // console.log("criteria[key]: ",criteria[key], ", collection[i][key]: ", collection[i][key] );
      if (collection[i][key] == criteria[key]){
        check = true;
        // console.log("inside collection[i][key] == criteria[key]: ");
        // console.log("check, in if: ",check);

      }
      else {
        check =false;
        // console.log("inside else");
      }
      // console.log("check, in inner loop: ",check);
    }
    // console.log("check, in outer loop: ",check);

    if (check == true){
      result.push(collection[i]);
    }
  }
  return result;
}

function findObjects(criteria, collection) {
  let result = [], check = false;
  for (let i = 0; i<collection.length; i++){
    for (key of Object.keys(criteria)){
      check = collection[i][key] == criteria[key] ? true : false;
      }

    if (check == true){
      result.push(collection[i]);
    }
  }
  return result;
}

console.log(findObjects(searchCriteria1, items));
console.log(findObjects(searchCriteria2, items));
/**
 * Time:    O()
 * Space:   O()
 */
function findObjectsFunctional(criteria, collection) {}

module.exports = {
  findObjects,
};
//9/16/20
/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string

  You can assume the key will exist on the object and the value of that key will be a string

  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
];

/**
 * Filters the @items based on the search criteria.
 * @param   {Array<Object>} items
 *          To be filtered
 * @param   {string} searchBy
 *          The key to search by.
 * @param   {string} searchFor
 *          The value of @searchBy key to match.
 * @return  {Array<Objects>}
 *          The filtered @items
 * Time:    O()
 * Space:   O()
 */
//My solution
function filterByKey(items, searchBy, searchFor) {
  let result = [], NoOfDigits = searchFor.length;
    for (let i = 0; i<items.length; i++){
      for (const [key, val] of Object.entries(items[i])){
        if (searchBy == key && searchFor == val.slice(0,NoOfDigits)) {
            // console.log("----loop:", i, ", key:", key, ", searchBy: ", searchBy, ", val:", val,", searchFor: ", searchFor, ", val.slice(0,NoOfDigits): ", val.slice(0,NoOfDigits) );
            result.push(items[i])
        }
      }
  }
  return result;
}
console.log(filterByKey(people, searchBy1, searchFor1));
console.log(filterByKey(people, searchBy2, searchFor2));
console.log(filterByKey(people, searchBy3, searchFor3));

//Howard's solution
function filterByKey(items, searchBy, searchFor) {
  let filteredArr = [];
    for (let i = 0; i<items.length; i++){
      if (items[i][searchBy].startsWith(searchFor)){
        filteredArr.push(items[i]);
      }
  }
  return filteredArr;
}
console.log(filterByKey(people, searchBy1, searchFor1));
console.log(filterByKey(people, searchBy2, searchFor2));
console.log(filterByKey(people, searchBy3, searchFor3));

module.exports = { filterByKey };
///9/17/20
/* 
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:

    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)

  Output:
    int (max servings)

  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

const recipe1 = {
  "organic fat": 99,
  "live squid": 1,
  "birds nest": 1,
  "fried flesh": 1,
  spicy: 5,
  "gourmet memes": 4200,
};

const available1 = {
  "organic fat": 990,
  "live squid": 1,
  "birds nest": 10,
  "fried flesh": 10,
  spicy: 50,
  "gourmet memes": 42000,
  sugar: 9001,
  spice: 5,
  "everything nice": 1,
  "triple point water": 5,
};
const expected1 = 1;
// because only 1 live squid is available and that is the limiting ingredient

// same as available1, except live squid has 10
const available2 = { ...available1, ["live squid"]: 10 };
const expected2 = 10;

const available3 = { ...available1, ["live squid"]: 0 };
const expected3 = 0;

const testCases = [
  { arguments: [recipe1, available1], expected: expected1 },
  { arguments: [recipe1, available2], expected: expected2 },
  { arguments: [recipe1, available3], expected: expected3 },
];

function getMaxServings(recipe, available) {
  let min;
  for (const [rKey, rVal] of Object.entries(recipe)){
    if (available[rKey]===undefined) { // checks 
      return 0;
    }

    if (min === undefined) {
      min = Math.floor(available[rKey] / rVal);
    } 
    else if (Math.floor(available[rKey] / rVal) < min) {
      min = Math.floor(available[rKey] / rVal)};
  }
  return min;
}
console.log(getMaxServings(recipe1, available1));
console.log(getMaxServings(recipe1, available2));
console.log(getMaxServings(recipe1, available3));
// module.exports = {
//   getMaxServings,
// };
/* 
  Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here): 
    https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d

  The more you deal with objects, especially ones with many nested objects, where you
  are chaining dot notation to access nested values, the more you run into these errors:
    Uncaught TypeError: Cannot read property 'keyName' of undefined
    Uncaught TypeError: Cannot read property 'keyName' of null
  
  These errors mean, somewhere along your chain of dots, one of the keys did not exist
  on the object so it returned undefined, and then the next dot was trying to access
  a key on undefined, or the key did exist but null was it's value.

  One example of how this might happen is getting JSON data back from an API. Sometimes, 
  the record you requested has more data so there are more levels of nesting, which you get used to,
  so you write your code to access the nested data but then you request a different record, and
  less data is available, so your code breaks when trying to access nested data that isn't there.

  There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
  you look through a "lens" to help you see into an object and safely attempt to access a nested value.

  Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
  one at a time, to make sure it is not undefined or null before going to the next dot.

  Input:
    Object,
    Array of strings representing a path of keys in the Object

  Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
      - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*/

const user = {
  id: 101,
  email: "jack@dev.com",
  personalInfo: {
    name: "Jack",
    address: {
      line1: "westwish st",
      line2: "washmasher",
      city: "wallas",
      state: "WX",
    },
  },
  favorites: {
    number: 0,
  },
};

const keys1 = ["personalInfo", "address", "city"];
const expected1 = "wallas";

const keys2 = ["personalInfo", "address", "country"];
const expected2 = null;

const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
const expected3 = null;

const keys4 = ["favorites", "number"];
const expected4 = 0;

const keys5 = [];
const expected5 = user;


function lens(obj, keys) {
  let tempObj = obj;
  for (let i = 0; i<keys.length; i++){
    // console.log("loop ",i,",tempObj:",tempObj);
    if (tempObj === undefined) {
      return null;
    }
    tempObj = tempObj[keys[i]];
  }
  return tempObj;  
}
console.log(lens(user, keys1));
console.log(lens(user, keys2));
console.log(lens(user, keys3));
console.log(lens(user, keys4));
console.log(lens(user, keys5));
module.exports = { lens };

//9/21/20
/* 
  Given to me (Neil) in an interview

  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * @param   {string} str
 * @return  {boolean}
 */


function canStringBecomePalindrome(str) {
  if (str === ""){return false};
  if (str.length === 1){return true};
  if (str.length === 2 && str[0] != str[1]){return false};

  var obj = {};
  for (var i in str) {
    var character = str[i];
    if (obj.hasOwnProperty(character)) {
      obj[character]++;
    }
    else {
      obj[character] = 1;
    }
  }
  // console.log(obj);
  let oddCount = 0;
  for (const [key, val] of Object.entries(obj)){
    if (val % 2 != 0){oddCount ++};
  
  }
  return (oddCount==1 || oddCount==0);
}
console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));
console.log(canStringBecomePalindrome("aammc"));

module.exports = { canStringBecomePalindrome };

//9/27/20
/* 
  Given a string, containing letters, single digit ints, and question marks
  return whether or not there are exactly 3 question marks between EVERY two ints that add up to 10
    - if there are no two ints that add up to 10, return false

  Helpful functions:
    parseInt(char) => NaN or the string parsed to an int
    isNaN(x) => true or false
      - need to use isNaN if you want to know if something is NaN
      - the number 0 is falsy
      - NaN is falsy
*/

const str1 = "aa6?9";
const expected1 = false;

const str2 = "acc?7??sss?3rr1??????5";
const expected2 = true;

const str3 = "?3?d?dad?7??????3";
const expected3 = true;

const str4 = "7??????3";
const expected4 = false;
// Explanation: too many question marks

/**
 * Determines if there are exactly 3 "?" chars between
 * EVERY two ints that add up to 10.
 * @param   {string} str
 * @return  {boolean}
 * Time:    O()
 * Space:   O()
 */

 //my solution
function questionMarks(str) {
  let qCount=0, startCount=false, int1=0, int2=0;
  for (let i = 0; i<str.length; i++){

    if (qCount=== 0 && startCount == false && isNaN(+str[i]) === false){
      int1 = +str[i];
      startCount = true;
    }
    if (startCount && isNaN(+str[i]) === false && +str[i] + int1 == 10){
      int2 = +str[i];
      startCount = false;

    }
    if (startCount && str[i] == "?"){qCount ++;}
  }
  // console.log("int1: ", int1,", int2: ", int2, ", qCount: ", qCount );
  return qCount == 3;
}
console.log(questionMarks(str1));
console.log(questionMarks(str2));
console.log(questionMarks(str3));
console.log(questionMarks(str4));
module.exports = { questionMarks };
//9/28/20
class SLL {
  constructor() {
      this.head = null;
  }

  isEmpty() {
      return this.head == null ? true : false;
      // if (this.head === null) {
      //     return true;
      // }
      // return false;
  }
  addToFront(node) {
      node.next = this.head;
      this.head = node;
  }
  addDataToFront(data) {
      let node = new Node(data);
      node.next = this.head;
      this.head = node;
  }

  doStuff() {
      // this.head
      if (this.head !== null) {
          this.head.next;
      }
  }
}

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

var node = new Node(10);


var mySLL = new SLL();

var check = mySLL.isEmpty();
console.log(check);

mySLL.addToFront(new Node(10));
mySLL.addDataToFront(10);
console.log(mySLL);

//9/26/20
class SLL {
  constructor() {
      this.head = null;
  }
  
  // console log the data of every node in the current list
  read(){
    var current = this.head;
    while(current){
      console.log("read: ",current.data);
      current = current.next;
    
      // if(current.next === null){
      //     console.log("this is the last node");
      // } 
  }
  }
  // find: return true / false if current list contains a data equal to value
  contains(value) {
    var current = this.head;
    while(current){
      if (current.data === value){
        return true;
      }
      current = current.next;
    
      // if(current.next === null){
      //     console.log("this is the last node");
      // } 
      return false;
  }
}

  // return true / false if current list contains a data equal to value
  // do not loop

  // function calls itself
  // base case that ends the crusive call
  // change the inputs every time you call the function

  recursiveContains(val, current) {
    // if you didn't pass current, current should be the head
    if (current === undefined) current = this.head;

    // if current is null, return false up the call stack
    if (current === null) return false;

    // if runner.data === value, return true up the call stack
    if (current.data === val) return true;

    // otherwise return the result of contains for current.next
    return this.recursiveContains(val, current.next);
}

  isEmpty() {
      if (this.head === null) {
          return true;
      }
      return false;
  }

  addToFront(node) {
      node.next = this.head;
      this.head = node;
  }

  addDataToFront(data) {
      let node = new Node(data);
      node.next = this.head;
      this.head = node;
  }
}

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

var mySLL = new SLL();
var node = new Node(10);
var node = new Node(5);
var node = new Node(22);


mySLL.addToFront(new Node(10));
mySLL.addToFront(new Node(5));
mySLL.addToFront(new Node(22));
// console.log(mySLL.isEmpty());
// mySLL.addDataToFront(10);
// mySLL.addDataToFront(5);
// mySLL.addDataToFront(22);
mySLL.read();
// console.log(mySLL.contains(22));
// console.log(mySLL.contains(35));
console.log(mySLL.recursiveContains(35));
console.log(mySLL.recursiveContains(22));


// var myNewSLL = new SLL();
// myNewSLL.addToFront(5);
// myNewSLL.addToFront(22);
// myNewSLL.addToFront(17);
// myNewSLL.read();
// myNewSLL.contains(22);
// myNewSLL.contains(35);



// var current = myNewSLL.head;

// while(current){
//   console.log(current.data);
//   current = current.next;

//   if(current.next === null){
//       console.log("this is the last node");
//   }
// }
//9/29/30
class SLL {
  constructor() {
      this.head = null;
  }
  
  // console log the data of every node in the current list
  read(){
    var current = this.head;
    while(current){
      console.log("read: ",current.data);
      current = current.next;
    
      // if(current.next === null){
      //     console.log("this is the last node");
      // } 
  }
  }
  // find: return true / false if current list contains a data equal to value
  contains(value) {
    var current = this.head;
    while(current){
      if (current.data === value){
        return true;
      }
      current = current.next;
    
      // if(current.next === null){
      //     console.log("this is the last node");
      // } 
      return false;
  }
}

  // return true / false if current list contains a data equal to value
  // do not loop

  // function calls itself
  // base case that ends the crusive call
  // change the inputs every time you call the function

  recursiveContains(val, current) {
    // if you didn't pass current, current should be the head
    if (current === undefined) current = this.head;

    // if current is null, return false up the call stack
    if (current === null) return false;

    // if runner.data === value, return true up the call stack
    if (current.data === val) return true;

    // otherwise return the result of contains for current.next
    return this.recursiveContains(val, current.next);
}

  isEmpty() {
      if (this.head === null) {
          return true;
      }
      return false;
  }

  addToFront(node) {
      node.next = this.head;
      this.head = node;
  }

  addDataToFront(data) {
      let node = new Node(data);
      node.next = this.head;
      this.head = node;
  }
}

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

var mySLL = new SLL();
var node = new Node(10);
var node = new Node(5);
var node = new Node(22);


mySLL.addToFront(new Node(10));
mySLL.addToFront(new Node(5));
mySLL.addToFront(new Node(22));
// console.log(mySLL.isEmpty());
// mySLL.addDataToFront(10);
// mySLL.addDataToFront(5);
// mySLL.addDataToFront(22);
mySLL.read();
// console.log(mySLL.contains(22));
// console.log(mySLL.contains(35));
console.log(mySLL.recursiveContains(35));
console.log(mySLL.recursiveContains(22));


// var myNewSLL = new SLL();
// myNewSLL.addToFront(5);
// myNewSLL.addToFront(22);
// myNewSLL.addToFront(17);
// myNewSLL.read();
// myNewSLL.contains(22);
// myNewSLL.contains(35);



// var current = myNewSLL.head;

// while(current){
//   console.log(current.data);
//   current = current.next;

//   if(current.next === null){
//       console.log("this is the last node");
//   }
// }

//9/30/20
class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class SLL {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Return the total amount of nodes in the list
  size(){
    if (this.head != null){
      let count = 0;
      let runner = this.head;
      while (runner != null){
        runner = runner.next;
        count ++;
      }
      return count;      
    }
    return 0;

  }

  // Remove from front: remove and return the first node in the SLL
  removeFromFront(){
    if (this.head != null){
      this.head = this.head.next;
    }
  }

  // bonus: add a node to the end of the list.
  addToBack(node){
    if (this.head != null){
      let runner = this.head;
      while (runner.next != null){
        runner = runner.next;
        if (runner.next == null){
          runner.next = node;
          runner.next.next = null;
        }
      }
    }
  }
  


  // console log the data of every node in the current list
  read() {
      var current = this.head;

      while (current) {
          console.log(current.data);
          current = current.next;
      }
  }

  // find: return true / false if current list contains a data equal to value
  contains(value) {
      // start at the head
      var runner = this.head;

      // while we have a runner
      while (runner) {

          // return true if data === value
          if (runner.data === value) {
              return true;
          }
          // otherwise advance the runner
          runner = runner.next;
      }

      return false;
  }

  // return true / false if current list contains a data equal to value
  // do not loop
  recursiveContains(val, current) {
      // if you didn't pass current, current should be the head
      if (current === undefined) current = this.head;

      // if current is null, return false up the call stack
      if (current === null) {
          return false;
      }

      // if runner.data === value, return true up the call stack
      if (current.data === val) return true;

      // otherwise return the result of contains for current.next
      return this.recursiveContains(val, current.next);
  }

  // return true / false if list is empty
  isEmpty() {
      if (this.head === null) {
          return true;
      }
      return false;
  }

  // add node to front of list
  addToFront(node) {
      node.next = this.head;
      this.head = node;
  }

  // create a node with data and add to front of list
  addDataToFront(data) {
      let node = new Node(data);
      node.next = this.head;
      this.head = node;
  }

  //10/1/20 
  delete(val) {
    if (this.head !== null) {
        let runner = this.head;
        if (runner.data == val){
            console.log("inside if----");
          this.head = runner.next;
        }
      //   console.log("this.head.data: ", this.head.data);
        while (runner.next != null) {
          // console.log("in while loop: runner.next:  ", runner.next);
          if (runner.next.data == val){// then this is the node we want to delete
            runner.next = runner.next.next;
            return;
          }
          runner = runner.next;
        }
    }
    return null;

}
var mySLL = new SLL();
mySLL.addToFront(new Node(10));
// console.log(mySLL);
// console.log("mySLL.size():", mySLL.size());
mySLL.addToFront(new Node(5));
mySLL.addToFront(new Node(22));
mySLL.addToFront(new Node(30));
mySLL.addToFront(new Node(18));
console.log(mySLL);
console.log("mySLL.size():", mySLL.size());
mySLL.delete(5);
console.log(mySLL);
console.log("mySLL.size():", mySLL.size());
//10/6/20
// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO


class arrStack {
  constructor() {
      this.items = [];
  }

  push(item) {
      this.items.push(item);
  }

  pop() {
      return this.items.pop();
  }

  peek() {
      return this.items[this.items.length - 1];
  }

  isEmpty() {
      if (this.items.length === 0) {
          return true;
      }
      return false;
  }
}

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class slStack {
  constructor() {
      this.top = null; // this.head, this.end
  }

  // add to top
  push(newNode) { 
      newNode.next = this.top
      this.top = newNode;
   }

  // remove from top
  pop() {
      if (this.top == null) {
          return;
      }
      var temp = this.top;
      this.top = this.top.next;
      return temp;
   }

  // aka check top
  peek() {
      return this.top;
   }

  // check if empty
  isEmpty() { 
      return (!this.top);
  }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
  var temp = new slStack();
  var count = 0;
  while (!stack.isEmpty()) {
      temp.push(stack.pop());
      count ++;
  }
  while (!temp.isEmpty()){
      stack.push(temp.pop());
  }
  return count;
};
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

var stack1 = new slStack();
stack1.push(node1);
stack1.push(node2);
stack1.push(node3);

// console.log(stack1);
// // stack1.pop();
// console.log(stack1);
// console.log(stack1.peek());
// console.log(stack1.isEmpty());
console.log(countStack(stack1));
//10/5/20
// Queue
// FIFO (First in, first out)


class Queue {
  constructor() {
      this.front = null;
      this.rear = null;
      this.length = 0;
  }

  enqueue(node){
      if (this.length == 0){
          this.front = node;
          this.rear = node;
      } else {
          this.rear.next = node;
          this.rear = node;
      }
      this.length++;
  }

  dequeue(){
      if (this.front == null){
          return;
      }
      var node = this.front;
      this.front = this.front.next;
      this.length--;
      return node;
  }

  checkFront(){
      return (this.front == null) ? null : this.front.data;
  }

  isEmpty(){
      return (this.length == 0);
  }

  getLength(){
      return this.length;
  }
}


// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// first in, first out

class arrStack {
  constructor() {
      this.items = [];
  }

  push(item) {
      this.items.push(item);
  }

  pop() {
      return this.items.pop();
  }

  peek() {
      return this.items[this.items.length - 1];
  }

  isEmpty() {
      if (this.items.length === 0) {
          return true;
      }
      return false;
  }
}

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class slStack {
  constructor() {
      this.top = null; // this.head, this.end
      this.length = 0;
  }

  // add to top
  push(newNode) {
      if (this.top === null) {
          this.top = newNode;
      } else {
          newNode.next = this.top;
          this.top = newNode;
      }
      this.length++;
  }

  // remove from top
  pop() {
      if (this.top === null) return null;

      const removed = this.top;
      this.top = this.top.next;
      removed.next = null;
      this.length--;

      return removed;
  }

  // aka check top
  peek() {
      return this.head ? this.head.data : null;
  }

  // check if empty
  isEmpty() {
      return this.head === null;
  }

  length() {
      return this.length;
  }
}

function readQueue(q) {
  var temp = new Queue();
  var length = q.getLength();
  for (var i = 0; i < length; i++){
      console.log("Queue data: ", q.checkFront());
      temp.enqueue(q.dequeue());
  }
  for (var i = 0; i < length; i++){
      q.enqueue(temp.dequeue());
  }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
  let newStack = new slStack();
  let count = 0;

  while (!stack.isEmpty()) {
      let node = stack.pop();
      newStack.push(node);
      count++;
  }

  while (!newStack.isEmpty()) {
      stack.push(newStack.pop()); h
  }

  return count;
};

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

var queue1 = new Queue();
// console.log(queue1.length);

queue1.enqueue(node1);
queue1.enqueue(node2);
queue1.enqueue(node3);
console.log(queue1);

// queue1.dequeue(node1);
readQueue(queue1);
// console.log(queue1.length);
console.log(queue1);
// console.log("queue1.checkFront():", queue1.checkFront());
// console.log(queue1.isEmpty());
// console.log(queue1.getLength());

//10/9/20
// minStack

// recreate the Stack class as a minStack.
// minStacks support the following methods:
// push(node), pop(), peek(), isEmpty(), size()
// and a new method called
// getMin()

// getMin() should retrieve the minimum element of the stack.
// We should be able to do this in constant time with no looping!
// Just like size(), we can make this constant!
// How would we modify push and pop to keep track of a minimum element?
// Always checking if we need to update the min could be a way!

class Node {
  constructor(data){
      this.data = data;
      this.next = next;
  }
}

class minStack {
  constructor(){
      this.top = null;
      this.length = 0;
      this.mins = [];
  }

  push(node){
      if (this.mins.length === 0 || node.data < this.getMin().data){
          this.mins.push(node);
      }
      node.next = this.top;
      this.top = node;
      this.length++;
  };

  pop(){
      if(this.top === null){
          return null;
      };

      var popped = this.top;
      this.top = this.top.next;
      popped.next = null;
      this.length--;

      if(popped.data === this.getMin().data){
          this.mins.pop();
      }

      return popped;
  }

  isEmpty(){
      if(this.top === null) return true;
      return false;
  }

  peek(){
      return this.top;
  }

  size(){
      return this.length;
  }

  getMin(){
      // not sure how safe this is without error handling
      if(this.mins.length === 0){
          return null;
      }
      return this.mins[this.mins.length - 1];
  }
};

var minStack = new minStack();
minStack.getMin();








// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
  var tempStack = new slStack();
  var sorted = true;

  while (!stack.isEmpty()) {
      var tempNode = stack.pop();
      if (tempStack.isEmpty() || tempStack.peek().data <= temp.data) {
          tempStack.push(tempNode);
      } else {
          sorted = false;
          tempStack.push(tempNode);
          break;
      }
  }

  while (!tempStack.isEmpty()) {
      stack.push(tempStack.pop());
  }
  return sorted;
}

// bonus
// given two queues, return the one with the greater sum.
// return the queues to their original order
// assume node.data are integers
function greaterOfTwoQueues(queue1, queue2) {
  return sumQueue(queue1) >= sumQueue(queue2) ? queue1 : queue2;
}

function sumQueue(queue) {
  let newQueue = new Queue();
  let sum = 0;

  while (!queue.isEmpty()) {
      let node = queue.dequeue();
      sum += node.data;
      newQueue.enqueue(node);
  }

  while (!newQueue.isEmpty()) {
      queue.enqueue(newQueue.dequeue());
  }

  return sum;
}


// Queue
// FIFO (First in, first out)


class Queue {
  constructor() {
      this.front = null;
      this.rear = null;
      this.length = 0;
  }

  enqueue(node) {
      if (this.rear === null) {
          this.rear = node;
          this.front = node;
      } else {
          this.rear.next = node;
          this.rear = node;
      }
      this.length++;
  }

  dequeue() {
      if (this.front === null) {
          return null;
      };
      if (this.front === this.rear) {
          this.rear = null;
      };
      let node = this.front;
      this.front = node.next;
      node.next = null;
      this.length--;
      return node;
  }

  checkFront() {
      return this.front ? this.front.data : null;
  }

  isEmpty() {
      return this.front === null;
  }

  length() {
      return this.length;
  }
}

function readQueue(queue) {
  var tempQueue = new Queue();

  while (!queue.isEmpty()) {
      var tempNode = queue.dequeue();
      console.log(tempNode.data);
      tempQueue.enqueue(tempNode);
  }

  while (!tempQueue.isEmpty()) {
      queue.enqueue(tempQueue.dequeue());
  }

  return queue;
}


// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// first in, first out

class arrStack {
  constructor() {
      this.items = [];
  }

  push(item) {
      this.items.push(item);
  }

  pop() {
      return this.items.pop();
  }

  peek() {
      return this.items[this.items.length - 1];
  }

  isEmpty() {
      if (this.items.length === 0) {
          return true;
      }
      return false;
  }
}

class slStack {
  constructor() {
      this.top = null; // this.head, this.end
      this.length = 0;
  }

  // add to top
  push(newNode) {
      if (this.top === null) {
          this.top = newNode;
      } else {
          newNode.next = this.top;
          this.top = newNode;
      }
      this.length++;
  }

  // remove from top
  pop() {
      if (this.top === null) return null;

      const removed = this.top;
      this.top = this.top.next;
      removed.next = null;
      this.length--;

      return removed;
  }

  // aka check top
  peek() {
      return this.head ? this.head.data : null;
  }

  // check if empty
  isEmpty() {
      return this.head === null;
  }

  length() {
      return this.length;
  }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
  let newStack = new slStack();
  let count = 0;

  while (!stack.isEmpty()) {
      let node = stack.pop();
      newStack.push(node);
      count++;
  }

  while (!newStack.isEmpty()) {
      stack.push(newStack.pop()); h
  }

  return count;
};

// queue: isPalindrome
// return true or false if the queue is a palindrome:
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar



//            r                   f
// queue = <-(1)<-(2)<-(3)<-(2)<-(1)
// return true

//            r               f
// queue = <-(1)<-(3)<-(4)<-(40)
// return false

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty, length)
// return the queue back to it's original order

// you may use stacks or queues as additional storage, or even arrays
// you may create helper methods to break this challenge down into smaller parts

function isPalindrome(queue) {
  var palindrome = true;
  var stack = new Stack();  // create a stack to hold data
  var len = queue.length(); // get a fixed length

  for (var i = 0; i < len; i++) {
      var node = queue.dequeue();
      stack.push(new Node(node.data)); // we must create new Nodes for the stack
      queue.enqueue(node);
  }


  for (var i = 0; i < len; i++) {
      var dequeued = queue.dequeue();
      var popped = stack.pop();

      if (popped.data !== dequeued.data) {
          palindrome = false; // even if we flip palindrome to false, keep going to fix the queue
      }

      queue.enqueue(dequeued);
  }

  return palindrome;
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);

let myOtherQueue = new Queue();
myOtherQueue.enqueue(1);
myOtherQueue.enqueue(40);
myOtherQueue.enqueue(3);
myOtherQueue.enqueue(2);
myOtherQueue.enqueue(1);


//10/15/20
// DLLNodes have a .next and .prev
class DLLNode {
  constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
  }
}

// DLLists have both a .head and .tail pointer
class DLList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  // == Main Methods ==

  // return true or false if value exists
  exists(value){
      if (this.head == null){
          return false;
      }
      var runner = this.head;
      while (runner){
          if (runner.data == value){
              return true;
          }
          runner = runner.next;
  }}
// push to head
addHead(node) {
  if (!this.head) { // empty list
      this.head = node;
      this.tail = node;
  } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
  }
  this.length++;
}

reverse() {
  if (this.head === null || this.length == 1) {
      return null;
  }
  var front = this.head;
  var back = this.tail;
  var runner = this.head;
  var nextRunner = this.head.next;
  while (runner) {
      if (runner == this.head) {
          runner.prev = runner.next;
          runner.next = null;
          runner = runner.prev;
          if (nextRunner) {
              nextRunner = nextRunner.next;
          }
      }
      else if (runner == this.tail) {
          runner.next = runner.prev;
          runner.prev = null;
          break;
      }
      else {
          nextRunner.next = runner.prev;
          runner.prev = nextRunner;
          runner = nextRunner;
          nextRunner = nextRunner.next;
      }
  }
  this.head = back;
  this.tail = front;
}

}
var list = new DLList();
var node1 = new DLLNode(10);
var node2 = new DLLNode(20);
var node3 = new DLLNode(30);
var node4 = new DLLNode(40);
var node5 = new DLLNode(50);
list.addHead(node5);
list.addHead(node4);
list.addHead(node3);
list.addHead(node2);
list.addHead(node1);
console.log(list);
console.log("list.exists(30): ", list.exists(30));
list.reverse();
console.log(list);