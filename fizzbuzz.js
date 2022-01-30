var myArray = [];
for (let x = 1; x <= 100; x++) {
    myArray.push(x);


    if (x % 3 === 0) {
        console.log("FIZZ");
    } else if (x % 5 === 0) {
        console.log("BUZZ")
    }
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FIZZBUZZ")
    }
}