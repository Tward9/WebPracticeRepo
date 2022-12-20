// Task

// Complete the function in the editor below by returning a RegExp object, , that matches every integer in some string .

//solution
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
        let re = new RegExp('\\d+', 'g')
    
    /*
     * Do not remove the return statement
     */
    return re;
}
// \d is Find a digit, requires an additional \ before to allow it to be read
// + Matches any string that contains at least one of the preceding item
//g Perform a global match (find all matches rather than stopping after the first match)