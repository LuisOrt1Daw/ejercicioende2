console.log("Ejercicio4")
var calcular  = [1, 123, 500, 115, 44, 88];
var suma = 0;
var media = 0;
var mayor = 0;
var menor = 500;
var contador = 0;
for(let a=0;a!=calcular.length;a++){
contador++;
if(parseInt(calcular[a])<=parseInt(menor)){
parseInt(menor = calcular[a]);
}
if(parseInt(calcular[a])>=parseInt(mayor)){
parseInt(mayor = calcular[a]);
}
suma = parseInt(suma) + parseInt(calcular[a]);
}
media=parseInt(suma)/parseInt(contador);

console.log('Suma es '+suma);
console.log('mayor es '+mayor);
console.log('Menor es '+menor);
console.log('Media es '+media);