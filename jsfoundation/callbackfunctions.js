function square(n) {
    return n*n;
}

function cube(n) {
    return n*n*n;
}

function sumOfSomething(a, b, callback) {
    
    console.log(callback);
    val1 = callback(a);
    val2 = callback(b);
    return val1+val2;
}

const ans = sumOfSomething(345,78, (n) => n*n*n);
console.log(ans);