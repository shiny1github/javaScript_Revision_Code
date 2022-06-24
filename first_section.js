/*  VARIABLES
console.log("hello");
// variables - its is like a box for storing data and must give a name for that var(box);
var frndNames= "Rachna ";
console.log(frndNames);
//Naming convensional rules for variables
var _myName="shivani" //(_) allows
console.log(_myName);
var _1myName="suman" //after(_) number allows
console.log(_1myName);
//var 1myName="shiny" //first number not allows
//console.log(1myName);
var $myName="neha"//$ allows
console.log($myName);
//var %myName="neha"//%  not allows
//console.log(%myName);*/



/*DATA TYPES 
Note-1 typeof operator is used to know the data type
note_2 isNaN , It is a function isNaN()
//console.log(10+"20"); //concat with + operator (string)
//console.log( typeof(10+"20"));

//console.log(10-"3");
//console.log(typeof(10-"3")); //bug (number)

//console.log("java"+"script"); //string
//console.log(typeof("java"+"script"))
//console.log(" "+" "); // string
//console.log(typeof(" "+" "))
//console.log("shivani" - "suman"); //NaN(not a num)
//console.log(typeof("shivani" - "suman")) //Number

//true=1,flase=0
//console.log(true+true);
//console.log(typeof(true+true)) //Number
//console.log(true+false);
//console.log(false-true);

 var boolValueCheck = true;
 //console.log(typeof(boolValueCheck)); //boolean

 if (boolValueCheck = true){
     console.log("Hello Welcome to our code");
 }
 else
    console.log("byebye");


    
   // ---NaN (not a number) isNaN()---
   var customerNum =7666
   if(isNaN(customerNum)){
       console.log("Enter the valid Number");
   }
   else
   console.log("OTP sent");

1.NaN===NaN;
false
2.Number.NaN===NaN;
false
3.isNaN(NaN);
true
4.isNaN(Number.NaN);
true
5.Number.isNaN(NaN)
true
*/


/*Expressions:- Operator and Operatand
//.1 Assignment Operator :- assign the value left to right(=)
var A=12
var B=13
console.log(A==B);
console.log(A<B);
console.log(A>B);
console.log(A!=B); */

// 2. arithmetic Operator
/*var A=5
var B=2
var C=A+B
console.log("addition "+C);
C=A-B
console.log("subtraction ",C);
console.log("Multiplication", A*B);
console.log("Division", A/B);
console.log("Reminder",A%B); 
console.log("exponentiation" ,A**B );//using for power */



//Increment and Decrement Operator(prefix and postfix)
//postfixInc
/*var num1=25;
var num2=30;
var num3= num1++; //expression khatm hone ke baad inc hoga
console.log(num1);
console.log(num2);
console.log(num3);
//PrefixInc
var num1=5;
var num2=3;
var num3= ++num1-num2; //expression khatm hone ke pehle inc hoga
console.log(num1);
console.log(num2);
console.log(num3);
//postDec
var num1=5;
var num2=3;
var num3= num1-- +num2; //expression khatm hone ke baad Dec hoga
console.log(num1);
console.log(num2);
console.log(num3);
//PreDec
var num1=5;
var num2=3;
var num3= --num1 +num2; //expression khatm hone ke pehle Dec hoga
console.log(num1);
console.log(num2);
console.log(num3);*/




/*// 3. Comparison OPerator
var yourAge=25
var myAge=21
console.log(yourAge==myAge);
console.log(yourAge===myAge);
console.log(yourAge<=myAge);
console.log(yourAge>=myAge);
console.log(yourAge!=myAge);
console.log(yourAge!==myAge);
console.log(yourAge<myAge);
console.log(yourAge>myAge);
console.log(yourAge =myAge); 



//4. Logical Operator (&&):- use with boolean value
var a=30
var b=20

//Logical AND (&&) :-  both or all statment should be true then o/p will be true . if any one statment if false then o/p will be false
//console.log(a>b && b>0 );
//logical OR (||)
//console.log(a>b || b>0 );
//console.log(a>b && b>0 || b==10);
//logical NOT(!)
console.log(a>!b);





//string operator:- string concate  operator(+) for concate two strings
console.log("Hello","world");
console.log("Hello"+"world");
var myName ="Shivani"
console.log(myName+" Suman");

//CHALLENGES
console.log((3**3)); //3^3

var myName ="Shivani"
var myAge=21
console.log(myName+" "+myAge);

//swap two numbers 
var num1=10 // o/p num1=20 num2=10
var num2=20
var num3=num2;
console.log("num3",num3);
num2=num1;
num1=num3;
console.log("num1",num1);
console.log("num2",num2); 

//swap without 3rd variable
var num1=10 // o/p num1=20 num2=10
var num2=20
num1=num1+num2;//num1=30
num1=num1-10;
num2=num1-10;
console.log("num1",num1);
console.log("num2",num2); 

//method.2
var num1=10 // o/p num1=20 num2=10
var num2=20
num1=num1+num2;//num1=30
num2=num1-num2 //num2=10
num1=num1-num2 // num1=20
console.log("num1",num1);
console.log("num2",num2); 

//diffrence b/w(==) and (===)

//***************Control statement*********************
//if else
// leap year program
var Year=2013
if(Year%4===0 ){
    if(Year%100===0){
        if (Year%400===0) {
            console.log("it is  leap year");
        }else{
            console.log("it is not leap year");
        } 
    }else{
        console.log("it is leap year");
    }
 } else{
    console.log("it is  not leap year");
    }
*/



//switch statement
 //find the area of circle, rectangle and triangle



















 







