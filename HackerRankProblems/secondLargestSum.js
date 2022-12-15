// Objective

// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

// Function Description

// Complete the getSecondLargest function in the editor below.

// getSecondLargest has the following parameters:

// int nums[n]: an array of integers
// Returns

// int: the second largest number in nums
// Input Format

// The first line contains an integer, n, the size of the nums array.
// The second line contains n space-separated numbers that describe the elements in nums.

// Constraints

// , where  is the number at index .
// The numbers in  may not be distinct.

//solution
let nums = [1,2,3,4,5,6,7,8,9,10]
function getSecondLargest(nums) {
    // Complete the function
    let number;
    function sorter(a, b){
        return a-b;
    }
    nums.sort(sorter).reverse();
    for(let i=0; i<nums.length; i++){
        if(nums[i] < nums[0] && nums[i] > nums[i+1]){
            number=nums[i];
            return number;
        };
    };
};

getSecondLargest(nums);
//needed to look up how to sort properly, sort is alphabetical, views 10 as less then 5 because 1 is less then 5 unless you give it custom sorter

//successful 