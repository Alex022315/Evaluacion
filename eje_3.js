//3.	Realiza un algoritmo que calcule el factorial de un número.

let NumFac = parseInt(prompt('Digite su numero'));
let Snum = ''

for (let i = 1; i < NumFac; i--) {
    Snum = i * NumFac
}

console.log('El factorial de su numero es: '  + Snum);