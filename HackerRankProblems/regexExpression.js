// Task

// Complete the function in the editor below by returning a RegExp object, , that matches any string  satisfying both of the following conditions:

// String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
// The remainder of string  (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).

//solution
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
        let re = /^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/;
        
    /*
     * Do not remove the return statement
     */
    return re;
}
//needed to look up
//^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)  checks for the starting of the string to match. the backslash it to ensure the . is used.
//And then there can be any word or letter so [a-z|A-Z]