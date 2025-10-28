console.log("sum module executed");
var x = "hello world";
function calculateSum(x, y) {
    const sum = x + y;
    console.log(`The sum of a and b is: ${sum}`);
}

module.exports = {
    calculateSum: calculateSum,
    x: x,
};
