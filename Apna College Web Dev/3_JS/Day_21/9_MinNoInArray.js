let nums = [10, 20, 30, 40];
let min = nums.reduce((min, el) => {
    if (min < el) {
        return min;
    } else {
        return el;
    }
});

console.log(min);