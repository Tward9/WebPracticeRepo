// Given an integer, , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: n x i = result.

//solution
function main() {
    const n = parseInt(readLine().trim(), 10);
    for(let i=0; i<10; i++){
        let mult = i+1;
        let result = n*mult;
        console.log(`${n} x ${mult} = ${result}`);
    }
}