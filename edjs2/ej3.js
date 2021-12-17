console.log("Ejercicio3")
var cadenas = ['Buenos días','hola','estoy en clase de entornos de desarrollo','UD3','ejercicios javascript','objetos predefinidos y funciones'];
setInterval(MuestraCadenas, 2000);
function MuestraCadenas(){
	for(var a=0;a<cadenas.length;++a){
  	console.log(cadenas[a]);
	}
}