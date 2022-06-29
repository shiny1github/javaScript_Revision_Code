//*********************************** Date - 15\06\2022 *********************************************************** */
/* 
//variables - var, let, const

var num1 =52;
let str ="this is let keyword"
const pi= 3.14;
num1=24;
if(num1==24)
{
    console.log(str)
}
//pi=5; // showing error bcz we can't re-assign const value
console.log(num1,str,pi);



//**************************************** Date - 16\06\2022 *******************************************************

//variables - var ,let ,const

//********VARIABLES********* */


// function f(){
//     var name="shivani";
//     let RegNum=596;
//     const pi=3.14; 
//     console.log(name);
//     console.log(RegNum);
//     console.log(pi);
// }
// f();
// console.log(RegNum);
// console.log(name);
// console.log(pi);



//variable in outside the function


// var a=10;
// function f(){
//     console.log(a)
// }
// f();
// console.log(a);



//variable inside the function

/*
function f(){
    var a=12; // it can be accessible any where within this fuction 
    console.log(a); // o/p = 10
}
f();
console.log(a); // A cannot be accessible outside of function , o/p = ReferenceError:a is not defined 
*/


/*
 //re-declear variable using var
var a =20;
//user can re-intialize and declare variable using var
var a=8;
 a=7;
console.log(a);
*/

/*
console.log(a); // undefined
var a=10; //ReferenceError: a is not defined
*/

// *************LET KEYWORD*********/

//the scope of let is only block scoped. It can't be accesible outside the particular block "({block})".

/*1 
let  a =12;
function f(){
    console.log(a); // o/p-12
}
f();
console.log(a); // o/p-12
1*/

/*2
let a ="shivani";
function f(){
    let b="suman";
    console.log(b); // o/p-suman
    console.log(a); // o/p-shivani
}
f();
//console.log(b); //o/p -ReferenceError: b is not defined
console.log(a); // o/p-shivani
2*/


/*3
//user cannot re-declare the variable with let but can update
let a=10;
//let a=12; // o/p- SyntaxError: Identifier 'a' has already been declared
a=12 // o/p-12
console.log(a);
3*/

/*4
// we can declare the  variable with the same name in different blocks using the let
let a=10;
if(true){
    let a=9
    console.log(a); //o/p- 9
}
console.log(a);  //o/p- 10
4*/


/*5
//if  we use the "let" before the declaration ,it does not initialize with undefined just
//'like a var' and returns error
console.log(a); // o/p- ReferenceError: a is not defined
let a=10; //o/p-ReferenceError: Cannot access 'a' before initialization
5*/

//*********************** CONST ******************************* */
//SAME AS LET KEYWORD , EXCEPT THE USER CANNOT UPDATE IT 


/*1
//when declare a const ,they need to initialize it, otherwise it returns error
const pi;
console.log(pi); //o/p-SyntaxError: Missing initializer in const declaration
1*/

/*2
//we can not update the const variable once it is declared
const  pi=3.14; // o/p- 3.14
function f(){
pi =4.9; // o/p- TypeError: Assignment to constant variable.
console.log(pi);
}
f();
2*/

//user cannot change the properties of the const obj
//but they can change the value of properties of the const obj



//********************************************** Date- 21/06/2022 ***************************************************************************** */
 


//variable var
 //variable in outside the function
 /*
 var a =10;
 function fun(){
     console.log(a);
    }
    fun()
    console.log("time comp",a)
    */

    //variable inside the function
    
    /*function fun(){
        var insidefun=20;
        console.log(insidefun);
    }
    console.log("errr",insidefun);
    */


    //re-initialize variable using var
    /*var re_dec =17;
    var re_dec=20;
    re_dec=144;
    console.log(re_dec);
    */
   //***************************************************************** */
   //variable let
   //user cannot re-intialize the variable with let but can update
   /*
   let re_intialize=40;
   console.log(re_intialize);
   //let re_intialize=50;
   console.log(re_intialize);
   re_intialize=12; // we can update
   console.log(re_intialize);
   */

   // we can declare the  variable with the same name in different blocks using the let
   /*var  a =12;
   if(true){
       var a=50;
       console.log(a);
   }
   console.log(a);

   function fun(){
    console.log(a);

   }
   fun(); // op- 50 50 50
   */

   //**********OR */
   
   /*
   let  a =12;
   if(true){
       let a=50;
       console.log(a);
   }
   console.log(a);

   function fun(){
    console.log(a);

   }
   fun(); //op-50 12 12
   */

   //console.log(a);
   //let a=10;
   //************************************************ */
   //variable const
   //when declare a const ,they need to initialize it, otherwise it returns error
   /*const pi=3.14;
   console.log(pi);*/

   //we can not update the const variable once it is declared
   /*const pi =3.14;
   const p =12;
   console.log(pi)
   console.log(p);
   pi=4;
   console.log(pi)*/
   //**************************************************** */
   //**************************************** Date - 23\06\2022 *******************************************************
    // variables - var , let , const
    //****************** Var ************************************ */
     // //variable in outside the function

     /*
     var num=100;
     function num_function(){
         console.log(num);
     }
     num_function()
     console.log(num);
     */

//variable inside the function
/*
function fun(){
    var a=10;
    console.log(a);
}
fun();
console.log(a);
*/

//re-declear variable using var
/*
var a=20;
var a=25;
a=30;
console.log(a);
*/

/*
console.log(a);
var a=10;
*/

// *************LET KEYWORD*********/

//the scope of let is only block scoped. It can't be accesible outside the particular block "({block})".
//outside the function
/*
let num=15;
function f(){
    console.log(num);
}
f();
console.log(num);
*/
// inside the function
/*
function fun(){
    let a=10;
    console.log(a);
}
fun()
console.log(a);
*/
// re-declare using let
/* 
let a=12;
let a=25; // err-SyntaxError: Identifier 'a' has already been declared
a=23;
console.log(a);
*/

// we can declare the  variable with the same name in different blocks using the let

/*
let num=90;
function f(){
    let num=45;
    console.log(num);
}
f()
console.log(num);
*/

/*
console.log(a);//ReferenceError: a is not defined
let a=20; //ReferenceError: Cannot access 'a' before initialization
*/
//#######################$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// var vs let with 'if block' and 'function' 
/*var value=50;
if (true){
    var value =20;
    console.log(value);
}
function f(){
    console.log(value);
}
f();
console.log(value); // 20 20 20
*/
/*
let value=50;
if (true){
    let value =20;
    console.log(value);
}
function f(){
    console.log(value);
}
f();
console.log(value); //20 50 50
*/
//#######################$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//******************* Const ************************** */

/*
const lambda =0.688;
const lambda=7;
console.log(lambda);
lambda=7;
*/
//when declare a const ,they need to initialize it, otherwise it returns error
/*
const pi ;
console.log(pi); //SyntaxError: Missing initializer in const declaration
*/

//**************************************************** */
//**************************************** Date - 24\06\2022 *******************************************************
//variables
//variable in outside the function
// var num = 1280;
// function fun(){
//     console.log(num);

// }
// fun();
// console.log(num);
//************************************ */
//variable inside the function
// function f(){
//     var num = 1220;
//     console.log(num);
// }
// f();
// console.log(num); //ReferenceError: num is not defined
//************************************ */
//re-declear variable using var
// var name="shiny sharma";
// var name="shivani suman";
// name="shivani"
// console.log(name);
//************************************ */
// console.log(a);//ReferenceError: a is not defined
// var a=5;// undefined


// *************LET KEYWORD*********/

//the scope of let is only block scoped. It can't be accesible outside the particular block "({block})".
//outside the function
// let num =32;
// function f(){
//     console.log(num);
// }
// f();
// console.log(num);
//******************************************** */

// inside the function
// function f(){
//     let num =14;
//     console.log(num);
// }
// f();
// console.log(num);//ReferenceError: num is not defined
//***************************************** */

// re-declare using let
// let name ="neha";
// //let name ="sneha"//SyntaxError: Identifier 'name' has already been declared
// name ="shiny"
// console.log(name);
//********************************************* */
// we can declare the  variable with the same name in different blocks using the let
// let FNumbers=5;
// if(true){
//     let FNumbers=25
//     console.log(FNumbers);
// }
// console.log(FNumbers);
//********************************************* */

//#######################$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// 'var' vs 'let' with 'if() block' and 'function' 
// var  num =12;
// if(true){
//     var num=200;
//     console.log(num);
// }
// function f (){
//     console.log(num);
// }
// f();
// console.log(num);


// let  num =12;
// if(true){
//     let num=200;
//     console.log(num);
// }

// function f (){
//     console.log(num);
// }
// f();
// console.log(num);
//#######################$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//******************* Const ************************** */
// const lambda
// console.log(lambda); //SyntaxError: Missing initializer in const declaration

//****************************************** */
// const lambda = 0.688;
// //const lambda= 41; //SyntaxError: Identifier 'lambda' has already been declared
// lambda=50;
// console.log(lambda); //TypeError: Assignment to constant variable



//**************************************** Date - 29\06\2022 *******************************************************
    // variables - var , let , const
    //****************** Var ************************************ */
    //variable in outside the function**********************************
//     var val=276;
//     function f(){
//         var val=34;
//         console.log(val); // 34
//     }
//    console.log(val); //276
//    f()

//variable inside the function****************************************
//    function inside(){
//        var inValue=40;
//        console.log(inValue);// 40
//    }
//    inside()
//console.log(inValue); //ReferenceError: inValue is not defined
//re-declear variable using var***************************************
// var A=20;
// var A=50;
// A=30
// console.log(A);
//before initalize****************************************************
//  console.log(a); //ReferenceError: a is not defined
//  a=24;
//  var a; // undefined

// *************LET KEYWORD*********/

//the scope of let is only block scoped. It can't be accesible outside the particular block "({block})".
//let outside the function*********************************************
// let num=20;
// function n() {
//     console.log(num);
// }
// n()
// console.log(num);
//let inside the function***********************************************
// function a(){
//     let num=30;
//     console.log(num);
// }
// a()
// console.log(num); //ReferenceError: num is not defined
// re-declare using let**************************************************
// let a=20;
// //let a=40; //SyntaxError: Identifier 'a' has already been declared
// a=30; // valid
// console.log(a);
// we can declare the  variable with the same name in different blocks using the let*******************
// let num =40;
// console.log(num);
// if(true){
//     let num=20;
//     console.log(num);
// }
// console.log(num);
//#######################$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// 'var' vs 'let' with 'if() block' and 'function'
// var number1=56;
// if(true){
// var number1=80;
//     console.log(number1);
// }
// function fun(){
//     console.log(number1);
// }
// fun();
// console.log(number1);

// let number1=56;
// if(true){
//     let number1=70;
//     console.log(number1);
// }
// function fun(){
//     console.log(number1);
// }
// fun();
// console.log(number1);

//******************* Const ************************** */
// const pi;
// console.log(pi); //SyntaxError: Missing initializer in const declaration

//******************************************************* */
// const pi=3.14;
// const code=369;
// let time="it will change";
// console.log(" pi",pi,"\n code",code,"\n time :",time);
// const pi=40;
// console.log(pi); //we can't change - SyntaxError: Identifier 'pi' has already been declared

//*************************************************************** */

//Naming convention
// var _myName="shiny" //done
//  var _1my__Name="sharma";
//  var 1myName="ss";//SyntaxError: Invalid or unexpected token
//  var $myName="shiny sharma"
// console.log($myName);

//****************************************************************************************************************** */









     
     


   









    


















