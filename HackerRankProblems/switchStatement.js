// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.
// Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).

// Function Description

// Complete the getLetter function in the editor below.

// getLetter has the following parameters:

// string s: a string
// Returns

// string: a single letter determined as described above
// Input Format

// Stub code in the editor reads a single string denoting  from stdin.

// Constraints

// , where  is the length of .
// String  contains lowercase English alphabetic letters (i.e., a through z) only.

//solution
function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        letter = 'A';
        break;
        
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        letter = 'B';
        break;
        
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        letter = 'C';
        break;
        
        default:
        letter = 'D';
    }
    return letter;
}

//correct
//tried to check against items as an array, but was given errors