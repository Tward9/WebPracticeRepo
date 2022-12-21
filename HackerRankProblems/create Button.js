// Complete the code in the editor so that it creates a clickable button satisfying the following properties:

// The button's id is btn.
// The button's initial text label is . After each click, the button must increment by . Recall that the button's text label is the JS object's innerHTML property.
// The button has the following style properties:
// A width of 96px.
// A height of 48px.
// The font-size attribute is 24px.

//solution
//css
// .btn{
//     width: 96px;
//     height: 48px;
//     font-size: 24px;
// }
//html
{/* <html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    <body>
        <div>
            <button class="btn" id='button'></button>
        </div>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html> */}
//js
let btnCount = document.getElementById("button");
let count = 0;

btnCount.innerHTML = count;

const increase = () => {
    count++;
    btnCount.innerHTML = count;
}

btnCount.addEventListener('click', increase); 