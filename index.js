

/* P. 3 */
function esDivisible(num1, num2) {
    if(num1 % num2 === 0) {
        return true;
    } 
    else {
        return false;
    };
};

/* P.4 */
function capitalizeFirstLetters(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

/* P.5 */
function calcularMediana(array) {
    const numerosOrdenados = array.sort((a, b) => a - b);
    const mitadArray = Math.floor(numerosOrdenados.length / 2);
    
    if (numerosOrdenados.length % 2 === 0) {
        return (numerosOrdenados[mitadArray - 1] + numerosOrdenados[mitadArray]) / 2;
    } 
    else {
        return numerosOrdenados[mitadArray];
    };
};




