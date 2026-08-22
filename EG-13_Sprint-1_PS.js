/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    // Write your code here

    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n) {
    let result = [];

    if (n <= 0) {
        return result;
    }

    if (n >= 1) {
        result.push(0);
    }

    if (n >= 2) {
        result.push(1);
    }

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}
