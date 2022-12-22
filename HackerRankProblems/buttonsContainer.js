// Objective

// In this challenge, we lay out buttons inside a div and modify their labels after each click event on one of the buttons. Check out the attached tutorial for learning materials.

// Task
// We want to create nine buttons enclosed in a div, laid out so they form a  grid. Each button has a distinct label from  to , and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.

//solution
//css
// .button{
//     width: 30%;
//     height: 48px;
//     font-size: 24px;
// }
// #btns{
//     width: 75%;
// }
//html
{/* <html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    
    <body>
        <div id = 'btns'>
            <div>
                <button class = 'button' id = 'btn1'> 1 </button>
                <button class = 'button' id = 'btn2'> 2 </button>
                <button class = 'button' id = 'btn3'> 3 </button>
            </div>
            <div>
                <button class = 'button' id = 'btn4'> 4 </button>
                <button class = 'button' id = 'btn5'> 5 </button>
                <button class = 'button' id = 'btn6'> 6 </button>
            </div>
            <div>
                <button class = 'button' id = 'btn7'> 7 </button>
                <button class = 'button' id = 'btn8'> 8 </button>
                <button class = 'button' id = 'btn9'> 9 </button>
            </div>
        </div>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html> */}
//js
let btn5 = document.getElementByID('btn5');
let btn4 = document.getElementById('btn4');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn6 = document.getElementById('btn6');
let btn3 = document.getElementById('btn3');
let btn2 = document.getElementById('btn2');
let btn1 = document.getElementById('btn1');
btn5.onclick=function(){ 
    let viarableNum=btn1.innerHTML; 
    btn1.innerHTML=btn4.innerHTML; 
    btn4.innerHTML=btn7.innerHTML; 
    btn7.innerHTML=btn8.innerHTML; 
    btn8.innerHTML=btn9.innerHTML; 
    btn9.innerHTML=btn6.innerHTML; 
    btn6.innerHTML=btn3.innerHTML; 
    btn3.innerHTML=btn2.innerHTML; 
    btn2.innerHTML=viarableNum;
}