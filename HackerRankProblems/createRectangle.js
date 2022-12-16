// Task

// Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

// : This value is equal to .
// : This value is equal to .
// : This value is equal to 
// : This value is equal to 
// Note: The names of the object's properties must be spelled correctly to pass this challenge.

// Input Format

// The first line contains an integer denoting .
// The second line contains an integer denoting .

// Constraints

// Output Format

// Return a object that has the properties specified above. Locked code in the editor prints the returned object's , , , and  to STDOUT.

//solution
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let length = a;
    let width = b;
    let perimeter = 2*(a+b);
    let area = a*b;
    
    return{length, width, perimeter, area};
}

//solved