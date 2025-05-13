// example 1
function add(a, b) {
    return a + b; // return kore 10, baire result variable e store hobe
};

const result = add(6, 4); // result e 10 store hobe
console.log("result", result); // output: result 10
console.log("rexult", result +5)  //    OUT PUT 15

// example 2
function add2(a, b) {
    console.log("ex-2", a + b); // sudhu output dekhaiche, return kore nai
}

const result2 = add2(3, 3); // return kore nai tai result2 = undefined
console.log("result2", result2); // output: result2 undefined
console.log("result2", result2 + 5); // output: result2 undefined

// example 3
function add3(a, b) {
    return a + b; // return koreche, kintu kono console.log nai tai output nai
}

add3(6, 3); // kichu dekhaibe na

// example 4
function add4(a, b) {
    console.log(a + b); // sudhu console e dekhaiche, return kore nai
}

add4(8, 4); // output: 12




