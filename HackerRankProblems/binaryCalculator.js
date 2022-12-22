// Objective

// In this challenge, we implement a calculator that uses binary numbers. Check out the attached tutorial for learning materials.

// Task

// Implement a simple calculator that performs the following operations on binary numbers: addition, subtraction, multiplication, and division. Note that division operation must be integer division only; for example, , , and .

// The calculator's initial state must look like this:

// image

// Element IDs. Each element in the document must have an id, specified below:

// innerHTML	id	Description/Behavior
// res	Contains the result of button presses.
// btns	A button container that displays all eight calculator buttons.
// 0	btn0	A button expressing binary digit .
// 1	btn1	A button expressing binary digit .
// C	btnClr	A button to clear the contents of .
// =	btnEql	A button to evaluate the contents of the expression in .
// +	btnSum	A button for the addition operation.
// -	btnSub	A button for the subtraction operation.
// *	btnMul	A button for the multiplication operation.
// /	btnDiv	A button for the integer division operation.
// Styling. The document's elements must have the following styles:

// body has a width of 33%.
// res has a background-color of lightgray, a border that is solid, a height of 48px, and a font-size of 20px.
// btn0 and btn1 have a background-color of lightgreen and a color of brown.
// btnClr and btnEql have a background-color of darkgreen and a color of white.
// btnSum, btnSub, btnMul, and btnDiv have a background-color of black, a color of red.
// All the buttons in btns have a width of 25%, a height of 36px, a font-size of 18px, margin of 0px, and float value left.

//solution

//html
{/* <html>
    <head>
        <meta charset="utf-8">
        <title>Binary Calculator</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    
    <body>
        <div id='container'>
            <div id='res'></div>
            <div id='btns'>
                <button class='btn' id='btn0'>0</button>
                <button class='btn' id='btn1'>1</button>
                <button class='btn' id='btnClr'>C</button>
                <button class='btn' id='btnEql'>=</button>
                <button class='btn' id='btnSum'>+</button>
                <button class='btn' id='btnSub'>-</button>
                <button class='btn' id='btnMul'>*</button>
                <button class='btn' id='btnDiv'>/</button>
            </div>
        </div>
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html> */}

//css
// #container{
//     width: 33%;
// }
// #res{
//     background-color: lightgray;
//     border: solid;
//     height: 48px;
//     font-size: 20px;
// }
// #btn0{
//     background-color: lightgreen;
//     color: brown;
// }
// #btn1{
//     background-color: lightgreen;
//     color: brown;
// }
// #btnClr{
//     background-color: darkgreen;
//     color: white;
// }
// #btnEql{
//     background-color: darkgreen;
//     color: white;
// }
// #btnSum{
//     background-color: black;
//     color: red;
// }
// #btnSub{
//     background-color: black;
//     color: red;
// }
// #btnMul{
//     background-color: black;
//     color: red;
// }
// #btnDiv{
//     background-color: black;
//     color: red;
// }
// .btn{
//     width: 25%;
//     height: 36px;
//     font-size: 18px;
//     margin: 0px;
//     float: left;
// }

//javascript in progress
let resultDiv = document.getElementByID("res");
let zero = document.getElementByID('btn0');
let one = document.getElementByID('btn1');
let clear = document.getElementByID('btnClr');
let equal = document.getElementByID("btnEql");
let plus = document.getElementByID('btnSum');
let minus = document.getElementByID('btnSub');
let multiply = document.getElementByID('btnMul');
let divide = document.getElementByID('btnDiv');

let firstVar = '';
let secondVar = '';
let operator = '';
function addToNum() {
    if(operator){
        secondVar += event.target.innerHTML;
    }else{
        firstVar += event.target.innerHTML;
    }
};

equal.addEventListener("click", );