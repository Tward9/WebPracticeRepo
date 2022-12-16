// Task

// Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects  in array  that satisfy .

// Input Format

// The first line contains an integer denoting .
// Each of the  subsequent lines contains two space-separated integers describing the values of  and .

// Constraints

// Output Format

// Return a count of the total number of objects  such that . Locked stub code in the editor prints the returned value to STDOUT.

//solution
function getCount(objects) {
    let count=0;
    objects.forEach(object => {
        if(object.x == object.y){
            count++;
        };
    });
    return count;
}