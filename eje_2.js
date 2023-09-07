//2.	Elabore un algoritmo que calcule el sueldo anual de un empleado, teniendo presente que este recibe una bonificación fija mensual.

let Sueldo = parseInt(prompt(' Digite su sueldo mensual :'));
let Bonificación = 1000;  
let SueldoAnual = Sueldo+(Bonificación*12)

console.log('Su sueldo anual es de : '+ SueldoAnual);