const max = (a, b) => a > b ? a : b;

let leMax = (a,b) => {
    var le_max;
    if(a>b){
        le_max = a;
        return le_max
    } else {
        le_max = b;
        return le_max
    }
}

// a et b (condition) ? valeur_si_vraie : valeur_si_faux
const min = (a, b) => a < b ? a : b;

console.log(leMax(2, 3))

// add, mul, sub

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;