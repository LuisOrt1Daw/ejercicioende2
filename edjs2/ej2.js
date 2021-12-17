console.log("Ejercicio2")
var info=prompt("Introduce Nombre:Apellidos:telefono:email:cp ");
let array=info.split(':');
let correo=array[3].split('@');
console.log(array[4]);
console.log(array[1]);
console.log(correo[1]);