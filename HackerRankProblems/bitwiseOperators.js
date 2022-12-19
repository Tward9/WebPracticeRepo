// Task

// We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

// Complete the function in the editor so that given  and , it returns the maximum .

// Note: The  symbol represents the bitwise AND operator.

// Input Format

// The first line contains an integer, , denoting the number of function calls.
// Each of the  subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of  and .

// Constraints

// Output Format

// Return the maximum possible value of  for any  in sequence .

//solution
function getMaxLessThanK(n, k) {
    let highest = 0;
    // let S = [...Array(n).keys()];
    // S.forEach(ell => {
    //     S[ell] = ell + 1;
    // })
    for (let i = 0; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let a = i;
            let b = j;
            let test = a & b;
            if (test > 0 && test < k && test > highest) {
                highest = test
            }
        }
    }

    return highest
}
//needed to remove extra array for timing. could remove converting to binary and just test bitwise on base ten values
console.log(getMaxLessThanK(5, 2));

//solved