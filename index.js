

/* P. 3 */
function esDivisible(num1, num2) {
    if(num1 % num2 === 0) {
        return true;
    } 
    else {
        return false;
    }
}

/* P.4 */
function capitalizeFirstLetters(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}



