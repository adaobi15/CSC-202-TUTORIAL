let pluralNoun = "roses";
let pluralNoun2 = "violets";
let singluarNoun = "I";
let singluarNoun2 = "YOU";
let color = "blue";
let color2 =" red";

console.log (pluralNoun  +  " are "  + color)
console.log (pluralNoun2 + " are " + color2)
console.log (singluarNoun + " love " + singluarNoun2)

var remainder;
remainder = 11 % 3;
console.log (remainder)
a = 12
b = 13
c = 11

c += 7
console.log (c)
b -= 4
console.log(b)
a *= 5;
console.log(a)

var girl = "i love \" money\" go girl"
console.log(girl)
var girl = 'i love " money" go girl'
console.log(girl)

var hum = "firstline\n\t\secondline\nthirdline"
console.log (hum)

var name = "beau"
var myName = "my name is "+ name + " and i am well"

console.log(myName)
var name = "beau"
var myName = " my name is "
myName += name

console.log(myName)

var lastNameLength = 0;
var lastName = "arinzechi";

lastNameLength = lastName.length;
console.log(lastNameLength)

var lastNameLength = "";
var lastName = "arinzechi";

lastNameLength = lastName[0];
console.log(lastNameLength)

var mystr = "jello world";
mystr = "hello world";
console.log (mystr)

var lastName = "arinzechi";

var lastNameLength = lastName[lastName.Length - 1];
console.log(lastNameLength) 

function words(myNoun, myAdverb){
    var result = " "
    result += "the " + myNoun + " is " + myAdverb
    return result;
}
    console.log(words("dog", "big"));
    console.log(words("mouse", "small"));
    // arrays

    var myArray = ["johnn",3];

     var myArray = [["johnn",3]["lusi", 20]];


     var ourArray = [50,60,70];
     var ourData = ourArray[2];
     console.log(ourData)

// modify arrays
var ourArray = [50,60,70];
ourArray[0] = 45;
console.log(ourArray)
// multidiminsional arrays
var myArray = [[1,2,3],[4,5,6],[7,8,9]];

var myData = myArray[1][1];
console.log (myData)

var ourArray = ["dad","gun","cat"];
ourArray.push (["happy", "joy"]) ;
console.log(ourArray)

// to remove from the back
var myArray = [[1,2,3],[4,5,6],[7,8,9]];
var removedFromMyArray = myArray.pop();

console.log(myArray)

// to remove from front
var myArray = [[1,2,3],[4,5,6],[7,8,9]];
var removedFromMyArray = myArray.shift();

console.log(myArray)

// to add to the beginning of an array
var myArray = [[1,2,3],[4,5,6],[7,8,9]];
myArray.shift();
myArray.unshift(5);
console.log(myArray)

var myList = [["cereal", 3],["bananas", 2], ["juice", 3], ["guns", 7]];
// functions
function ourresuableFunction(){
    console.log ("hello, world");
}
ourresuableFunction();
ourresuableFunction();


function ourFunction (a,b){
    console.log(a -b);


}
ourFunction(10,5);

ourFunction(19,5);
// global function
/*var myGlobal = 10;
function fun1(){
   var  oopsGlobal = 5;
}
function fun2 (){
    var ouput = " ";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        ouptput += "oopsGlobal" + oopsGlobal;
    }
    console.log(ouput);

}
fun1();
fun2();*/

function mylocalScope (){
    var myVar = 5;
    console.log(myVar);

}
mylocalScope(); 
//global variable is declared outside of the function
var outerWear = "T-Shirt";
function myOutFit(){
    return outerWear
}
console.log(myOutFit())
// local variable can be accesible in side the function


function  minusSeven(num){
    return num - 7;

}
console.log(minusSeven(10));
var sum = 0;
function add(){
    sum = sum + 3;
}
function add2(){
    sum += 5;
}

var changed =  0;
function change(num) {
    return (num * 2) / 3;
    changed = change(10);
}

function nextInLine (arr , item){
    arr.push(item);

    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("before" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 2));
console.log("after" + JSON.stringify(testArr));

//boolean

function boolean(){
    return false;
}

function testEqual(val){
    if (val == 12){
        return "equal";
    }
    return "not equal"
}
console.log(testEqual(10));

function testEqual(val){
    if (val !== 12){
        return "equal";
    }
    return "not equal"
}
console.log(testEqual(10));
function testEqual(val){
    if (val >  12){
        return "less tahn 20";
    }
    return "greater than 20"
}
console.log(testEqual(10));

function testLessThan (val){
    if (val < 25) {
        return "under 25";
    }
    if (val < 12) {
        return "under 55";
    }
    return " 55 or over";
}
console.log(testLessThan(10));

function testLessThan (val){
    if (val < 25 && val > 12) {
        return "under 25";
    }
    
    return " 55 or over";
}
console.log(testLessThan(10));

function order(val){
    if (val < 10) {
        return "less than 10";
    
    }else if (val < 5){
        return "less than 5";

    } else {
        return "greater tahn or equal to 10";
    }
}

console.log(order(10));

function test(num){
if (num < 5){
    return "tiny"

}
else if (num < 10) {
    return "small"
}else if (num < 15) {
    return " medium";
     
}
else {
}
}
console.log(test(7));

var name = [ "holy", "mango" , "dokie", "handle"]
function golf(par,strokes){
if (strokes == 1){
    return name[0]
}else if (strokes <= par -2){
    return name[1]
}else if (strokes == par - 1){
    return name[2]
}else if (strokes >= par + 3){
    return name[3]
}
}
console.log(golf(2,3));


function caseInSwitch(val){
    var answer = "";
    switch (val){
        case 1 :
            answer = "alpha";
            break;
    
    case 2 :
        answer = "male";
        break;

case 3:
    answer = "beta";
    break;
    }
return answer;
}
console.log(caseInSwitch(1));

function caseInSwitch(val){
    var answer = "";
    switch (val){
        case 1 : // like if statement
            answer = "alpha";
            break;
    
    case 2 :
        answer = "male";
        break;

case 3:
    answer = "beta";
    break;
    default :
    answer = "stuff"
    }
return answer;
}
console.log(caseInSwitch(5));

function chainToSwitch(val){
var answer =" "

switch (val){
    case "bob":
        answer = "marley";
        break;
        case 42:
            answer = "the answer";
            break;
            case 1:
                answer ="there is no #1"
                break;
                case 99 :
                    answer = "missed me by this much!";
                    break;
                    case 7:
                        answer ="ate nine"
                        break;
}
return answer
}
console.log(chainToSwitch(42))