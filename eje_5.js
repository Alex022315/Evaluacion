//5.	Elabore un algoritmo que sume los elementos de un vector y muestre el resultado. El vector tiene N cantidad de elementos. 

let NumerosVector =  parseInt(prompt('Numeros'));
let res = ''

for (let i = 1; i < NumerosVector; i++) {
    
    NumerosVector =  parseInt(prompt('Numeros'));
    
}

for (let i = 0; i < NumerosVector.length; i++) {
    res = NumerosVector+ i;
}

console.log('la suma de sus numeros es:' + res);