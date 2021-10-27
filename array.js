console.log('Here is : ', 'array')




//1
//Correct the syntax error
 const arr = [ 1,7 , 9 , 45];

 const arr2=["Str","alex","moh", "the","fox", "over", "lazy", "dog"];

 console.log("1:" + " " + arr)
 console.log("1:" + " " + arr2)





//2
//What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"];

console.log("2:" + " " + fruits[1]); // index 1 for banana
console.log("2:" + " " + fruits[0]); // index 0 for tomato


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

const myFavFoodArr  = ["Burger", "Pizza", "Wings", "Zinger", "Swiss Salad"];
const myFavSportArr = ["Gaming e-sports", "Swimming", "Coding"];
const myFavMovieArr = ["Leon The King", "Snowden", "Law Abiding Citizen", "Peppermint"]

console.log("3:" + " " + myFavFoodArr)
console.log("3:" + " " + myFavSportArr)
console.log("3:" + " " + myFavMovieArr)


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

const numArray = [1,4,5]
const letterArray = ["t","u","g","x"]
function firstOfArraay(arr){
  return arr[0];
}

console.log("4:" + " " + firstOfArraay(numArray))
console.log("4:" + " " + firstOfArraay(letterArray))
console.log("4:" + " " + firstOfArraay([3,5]))


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr){
  return arr[arr.length-1];
}
const arr4 = [1,2,3,4,5,6,7]
console.log("5:" + " " + lastOfArray(arr4))

// /*
// 6
// Using console make this array to be like this one (push, unshift, shift, pop)


// => [1,3,4,6,8,9,10]
// */
var array6 = [0,5,7,9]

array6.push(10)
array6.shift()
array6.shift()
array6.shift()
array6.unshift(8)
array6.unshift(6)
array6.unshift(4)
array6.unshift(3)
array6.unshift(1)
console.log("6:" + " " + array6)

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
*/
var array2 = [5,9,-7,3.5]
// adds number 7 to the end of the array and returns the length after the add
console.log("7:" + " " + array2.push(7)) 
// removes the last element of the array
console.log("7:" + " " + array2.pop()) 
// removes the first element of the array 
console.log("7:" + " " + array2.shift()) 
// adds 10 to the first element of the list and returns the length after the add
console.log("7:" + " " + array2.unshift(10)) 
console.log("7:" + " " + array2)
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x" ]) =>"u and g"
*/
let xx = [1,4,5];
let p = ["t", "u", "g", "x"]
function middleOfArray(arr){
  let arr10 = [];
    if(arr.length%2==0){
      arr10.push(arr[(arr.length/2)-1])
      arr10.push(arr[(arr.length/2)])
    }else{
      arr10.push(Math.ceil(arr.length/2))
    }
  return arr10;
}

console.log("8:" + " " + middleOfArray(xx))
console.log("8:" + " " + middleOfArray(p))

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
let numArr1 = [1,2,3,8,9];
numArr1[0]=5;
numArr1[1]=-22;
numArr1[2]=3.5;
numArr1[3]=44;
numArr1[4]=98;
numArr1[5]=44;

console.log("9:" + " " + numArr1);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

 var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
*/

var nums = [1,2,3,8,9]
function indexOfArray(arr,index){
  for(let i=0;i<arr.length;i++){
    return arr[index];
  }
}
console.log("10:" + indexOfArray(nums,3))
console.log("10:" + indexOfArray(nums,1))
console.log("10:" + indexOfArray(nums,4))


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast (arr) {
  return arr.slice(0,arr.length-1);
}
var nums= [1,2,3,8,9]
console.log("11:" + " " + arrayExceptLast(nums))


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var n= [1,2,3,8,9]
function addToEnd (arr,value) {
  arr[arr.length-1] = value;
  return arr;
}

console.log("12:" + " " + addToEnd(n,55))

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
const x = [1,2,3,4]
let sum=0 ;
function sumArray (arr){
  for(let i =0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}

function sumArray2(arr){
  let sum=0;
  let i=0;
  while(i<arr.length){
    sum+=arr[i]
    i++;
  }
  return sum;
}
console.log("13:" + " " + sumArray(x))
console.log("13:" + " " + sumArray2(x))

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(arr){
  let min=9999999999999999999999999;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
  return min;
}
let y = [10,9,2,6,8]

let min2=9999999999999999999999;
  let  i= 0;
function minInArray2 (arr) {
  
  while(i<arr.length){
    if(arr[i]<min2){
      min2=arr[i];
      
    }
    i++;  
  }
  return min2;
}
console.log("14:" + " " + minInArray(y))
console.log("14:" + " " + minInArray2(y))



/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray (arr,value) {
  for(let i = 0;i<arr.length;i++){
    if(arr[i]==value)
      arr.splice(i,value);
  }
  return arr;
}
let z = [1,2,3,4,5,6,7,8]
// console.log(removeFromArray(z,2))
console.log("15:" + " " + removeFromArray(z,4))

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let nums1= [1,2,3,8,9]
let count=0;
let a = []
function oddArray(arr) {
  
for(let i=0;i<arr.length;i++){
  if(arr[i]%2!=0){
    a[count] = arr[i];
    count++;  
  }
}
return a;
}
console.log("16:" + " " + oddArray(nums1))
let o = 0;
let count1=0;
function oddArray2(arr){
  while(o<arr.length){
    if(arr[o]%2!=0){
      a[count1] = arr[o];
      count1++;
    }
    o++;
  }
  return a;
}
console.log("16:" + " " + oddArray2(nums1))
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var array8= [1,2,3,8,9]
var nums10= [1,2,3,8,9,77]
let sum1=0;
let avg=0;
function aveArray(arr){
  for(let i =0;i<arr.length;i++){
    sum1=sum1+arr[i];
  }
  return avg = sum1/arr.length;
}
console.log("17:" + " " + aveArray(array8));
console.log("17:" + " " + aveArray(nums10));

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)


Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala","ha"]
let least="abcdefghijklmnopqrstuvwxyz";
function shorterInArray(arr) { 
  for(let i=0;i<arr.length;i++){
    if(arr[i].length<least.length){
      least=arr[i];
    }
  }
  return least;
}
console.log("18:" + " " + shorterInArray(strings))
let least2 = "";
function shorterinArray2(arr) {
  let j=0;
  while(j<arr.length){
    if(arr[j].length<least2.length){
      least=arr[j];
    }
    j++;
  }
  return least;
}

console.log("18:" + " " + shorterInArray(strings));

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string


Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var string= "alex mercer madrasa rashed2 emad hala";


function repeatChar(str,character) {
  count=0;
  for(let i=0;i<str.length;i++){
    if(str.charAt(i)== character)
      count++;
  }
  return count;
}

console.log("19:" + " " + repeatChar(string,'a'));
console.log("19:" + " " + repeatChar(string,'z'));
console.log("19:" + " " + repeatChar(string,'e'));

/* while loop */
function repeatChar2(str,character) {
  let i=0;
  while(i<str.length){
    if(str.charAt(i)== character){
    count++;
    }
  i++;
  }
}
console.log("19:" + " " + repeatChar(string,'a'));
console.log("19:" + " " + repeatChar(string,'z'));
console.log("19:" + " " + repeatChar(string,'e'));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index


Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings1= ["alex","mercer","madrasa","rashed2","emad","hala"]
function evenIndexOddLength(arr) {
  let newArr = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i].length%2!=0 && i%2==0){
      newArr = [arr[i]];
    }
  }
  return newArr;
}

console.log("20:" + " " + evenIndexOddLength(strings1));

/* while loop */
function evenIndexOddLength(arr){
  let newArr = [];
  let i=0;
  while(i<arr.length){
    if(arr[i].length%2!=0 && i%2==0){
      newArr = [arr[i]];
    }
    i++;
  }
  return newArr;
}
console.log("21:" + " " + evenIndexOddLength(strings1));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [44, 5, 4, 3, 2, 10]

function powerElementIndex(arr) {
  let newArr3 = [];
   for (let i=0;i<arr.length;i++){
     newArr3.push(Math.pow(arr[i],i));
   }
   return newArr3;
}
console.log("21:" + " " + powerElementIndex(nums));

/* while */

function powerElementIndex2 (arr) {
  let newArr4 = [];
  let i = 0;
  while(i<arr.length){
    newArr4.push(Math.pow(arr[i],i));
  }
  i++;
  return newArr4;
}
console.log("21:" + " " + powerElementIndex(nums));



/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums5= [5,2,2,1,8,66,55,77,34,9,55,1]
function evenNumberEvenIndex(arr) {
  let newArr5 = [];
  for(let i=0; i<arr.length;i++){
    if(arr[i]%2==0 && i%2==0){
      newArr5.push(arr[i]);
    }
  }
  return newArr5;
}
console.log("22:" + " " + evenNumberEvenIndex(nums5));

/* while */

function evenNumberEvenIndex2(arr) {
  let newArr6 = [];
  let i = 0;
  while(i<arr.length){
    if(arr[i]%2==0 && i%2==0){
      newArr6.push(arr[i])
    }
    i++;
  }
  return newArr6;
}

console.log("22:" + " " + evenNumberEvenIndex2(nums5));

