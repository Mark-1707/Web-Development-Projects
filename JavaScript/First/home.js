console.log('Hello Mark');

//alert('Hello Mark')

var b = 'Omkar';
console.log(b);

var num = 32
console.log(num);

document.getElementById('name').innerHTML ='Hey there';

//var age = prompt('What is your age?');

//document.getElementById('age').innerHTML = age;

var num1 = 50;

//Increament by 1
num1++;
console.log(num1);

//Decreament by 1
num1--;
console.log(num1);

//Functions
function fun(){
    console.log('This is a Function');
}
//call
fun();

/*
function greeting(yourName){
    var resutl = 'Hello ' + yourName;   //String Concatenation
    console.log(resutl);
}

var name1 = prompt('What is your name?');
greeting(name1);
*/

function sumNumbers(num3, num4){
    var result = num3 + num4;
    console.log(result);
}

sumNumbers(10, 20);

//while loop

/*
var num2 = 0;

while(num2 < 100){
    num2++;
    console.log(num2);
}
*/

//for loop
/*for(let num5 = 0; num5 <100; num5++){
    console.log(num5);
}*/

//Data Types
let yourAge = 20;   //Integer
let yourName = 'Omkar';  //String
let name = {first: 'Omkar', last: 'Shirote'};   //Object
let truth = false; //boolean
let groceries = ['Apples', 'Bananas', 'Oranges'];   //Array
let random; //undefined
let nothing = null; //null

//Strings in JavaScript (Common Methods)
let fruits = 'Apples';
let moreFruits = 'Bananas\nApples';
console.log(moreFruits);

console.log(fruits.length);
console.log(fruits.indexOf('pple'));
console.log(fruits.slice(2,6));
console.log(fruits.replace('pp', 'rr'));
console.log(fruits.toUpperCase());
console.log(fruits.charAt(2));

fruits = 'Apples,Banans,Oranges,Mango,Berry';
console.log(fruits.split(',')); //Split by Comma

//Arrays

let Fruits = ['Apples', 'Banans', 'Oranges', 'Mango', 'Berry'];
let Fruits1 = new Array('Apples', 'Banans', 'Oranges', 'Mango', 'Berry');

console.log(Fruits[1]);

for(let i = 0; i<Fruits1.length; i++){
    console.log('\n'+Fruits1[i]);
}

//Array common methods

console.log('to string', Fruits1.toString());
console.log(Fruits1.join('-'));
console.log(Fruits1, Fruits1.pop(), Fruits1); //Removes last item
console.log(Fruits1.push('Mellows'), Fruits1); //Appends
Fruits1.shift(); //Removes first item
console.log(Fruits1.toString());
Fruits1.unshift('kiwi');
console.log(Fruits1.toString());

let vegetables = ['tomato', 'potato', 'broccoli'];
let allGroceries = Fruits1.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,3));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumber = [5, 10, 1, 40, 60, 18, 100, 76];
console.log(someNumber.sort(function(a, c){return a-c})); //Sorted in Ascending Order
console.log(someNumber.sort(function(a, c){return c-a})); //Sorted in Descending Order

let newArray = new Array();

for(let i = 0; i <=10; i++){
    newArray.push(i);
}

console.log(newArray);

//Objects in JavaScript
//Dictionaries in Python

let student = {
    first : 'Omkar', 
    last : 'Shirote', 
    age: 20, 
    height: 170,
    studentInfo(){
        return this.first+' '+this.last + ' ' + this.age;
    }
};
//console.log(student.first);
//console.log(student["first"]);

//student.first = 'Om';
//console.log(student.first);

console.log(student.studentInfo());



//Conditionals and Control flows (if else)

var age = 45;

if( (age >= 18)  && (age <= 35) ){
    status = 'target demo';
    console.log(status);
}else{
    status = 'not my audience';
    console.log(status);
}

//Switch Statement
//differentiate between weekday and weekend
//0 -> sunday
//6 -> satursday

switch(6){
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:
        text = 'Weekday';
}

console.log(text);