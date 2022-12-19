// Task

// Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

// Input Format

// Locked stub code in the editor reads the following input from stdin:
// The first line contains an integer, , denoting the number of dates to check.
// Each line  of the  subsequent lines contains a date in MM/DD/YYYY format; each date denotes some  that is passed to the function.

// Constraints

// It is guaranteed that the input only consists of valid dates.
// Output Format

// The function must return a string denoting the day of the week corresponding to the date denoted by .

//solution
function getDayName(dateString) {
    let dayName;
    const date = new Date(dateString)
    let dayNum = date.getDay();
    console.log(dayNum);
    switch (dayNum) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
    }
    return dayName;
}

console.log(getDayName('10/11/2009'));

//solved