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


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
    let x = a;
    let y = b;

    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }

    return (a * b) / x;
}

/**
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}







