// Task

// Complete the reverseString function; it has one parameter, . You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
// Input Format

// Locked stub code in the editor reads variable  from stdin and passes it to the function.

// Output Format

// You must write two print statements using console.log():

// Print the contents of a caught exception's  on a new line. If no exception was thrown, this line should not be printed.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

//solution
let s = Number(1234)
function reverseString(s) {
    let string;
    let reversed;
    let joined;
    let error;
    try {
        string = s.split("");
        reversed = string.reverse();
        joined = reversed.join("");
    } catch (err) {
        error = 1;
        console.log(err.message);
    } finally {
        if (error) {
            console.log(s);
        } else {
            console.log(joined);
        }
    }
};

reverseString(s);

//solved
//needed to be sure to specify just the message for the error