const _ = require("lodash");

const numbers = [43, 43, 43, 321, 32, 654, 31];

_.each(numbers, function(number, i) {
    console.log(number);
})
