// Task

// Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by .
// If the element is odd, multiply the element by .
// The function must then return the modified array.

// Input Format

// The first line contains an integer, , denoting the size of .
// The second line contains  space-separated integers describing the respective elements of .

// Constraints

// , where  is the  element of .
// Output Format

// Return the modified array where every even element is doubled and every odd element is tripled.

//solution
function modifyArray(nums) {
    let newNums=[];
    nums.forEach(num => {
        if (num % 2 === 0) {
            let newNum = num*2;
            newNums.push(newNum);
        } else {
            let newNum = num*3;
            newNums.push(newNum);
        }
    })
    return newNums;
}

//solved