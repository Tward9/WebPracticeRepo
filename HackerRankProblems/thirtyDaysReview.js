// Today we will expand our knowledge of strings, combining it with what we have already learned about loops. Check out the Tutorial tab for learning materials and an instructional video.

// Task
// Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

// Note:  is considered to be an even index.

//solution
function processData(input) {
    //Enter your code here
    message = input.split("\n");
    let inOne = message[0];
    for(let i=0; i<inOne; i++){
        let word = message[i+1];
        let evens = '';
        let odds = '';
        for(let j=0; j<word.length; j++){
            if(j%2==0){
                evens=evens+word[j];
            }else{
                odds = odds+word[j];
            }
        }
        console.log(evens, odds);
    }
}
//requires splitting input lines to be a usable array