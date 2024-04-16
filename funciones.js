const razaDeperros = ["Gran Danes", "Pator Alemán", "Chihuahua", "Betoven", "Belgua", "Dalmata", "Pitbull", "San Bernardo"];

/*
JS maneja variables del siguiente modo:

var-> una variable de acceso local que cualquiera puede hacer uso de ella
let-> es una variable "protegida" solo se puede hacer uso dentro de la función. No se puede usar en todo el código.
const -> es una constante, significa que su valor no puede cambiar a lo largo del código


var x="habia una vex";
let x = "hola";

if(true){
    //Todo lo que ocurra aquí es independiente;
}
console.log(x);
*/

/*
  quiero desarrollar una función de suma


//formato tradiconal de una funcion
//función de suma:
function suma(n1,n2){
    return n1+n2;
}
//comilla doble se utiliza en formato de cadena "", simple en digitos'',
console.log(`Esta es la suma con una función tradicional: ${suma(4,5)}`);



/*funciones flechas: Nos ayudan a poder realizar peraciones de una forma sencilla y su estrucutra
 es la siguiente:
 
// "cadena" -> id, clase, nombre, atributo

//función flecha
const sumarFlecha = (n1,n2)=> n1+n2;
console.log(`Esta es la suma con funciones flecha: ${sumarFlecha(10,5)}`);



const razaDeperros = ["Gran Danes", "Pator Alemán", "Chihuahua", "Betoven", "Belgua", "Dalmata", "Pitbull", "San Bernardo"];

//queremos recorrerlo e imprimirlo


for(let i=0; i<razaDeperros.length; i++){
  console.log(razaDeperros[i]);
}

for(const raza of razaDeperros){
  console.log(raza);
}


const razaDeperros = ["Gran Danes", "Pator Alemán", "Chihuahua", "Betoven", "Belgua", "Dalmata", "Pitbull", "San Bernardo"];

for(const indice in razaDeperros){
  console.log(razaDeperros[indice]);
}

for(const indice in razaDeperros){
  console.log(razaDeperros);
}
*/

//forEach itera sobre los elementos del arreglo y no devuelve nada
//la diferencia entre el for es que el for no itera con objetos mientras que el Each si
//todos los forEach 
/*const razaDeperros = ["Gran Danes", "Pator Alemán", "Chihuahua", "Betoven", "Belgua", "Dalmata", "Pitbull", "San Bernardo"];
     razaDeperros.forEach((raza)=> console.log(raza));

     /* Su estrutura del forEach es la siguiente:
     argumento.forEach((raza, indice, arregloOriginal)=> lo que quiero que haga)
     */

/* Funcion MAP
   itera sobre los elemtnos del arreglo y regresa un arreglo diferente con el cual podemos jugar XD
  
const razaDeperros = ["Gran Danes", "Pator Alemán", "Chihuahua", "Betoven", "Belgua", "Dalmata", "Pitbull", "San Bernardo"];
const razasDePerrosEnMayusculas = razaDeperros.map((raza)=>console.log(raza.toUpperCase()));
*/   

/*
FIND:
  Permite realizar una búsquedaq de un elemento dentro del arreglo, si lo encuinetra, no retorna si no lanza 
  un "undefined"

  Por ejemplo yo quiero buscar dentro del arreglo si existe la raza Chihuahua
*/

/*
if(razaDeperros.find((raza)=>raza==="Doberman")){
  console.log("La raza se encuentra dentro del arreglo:")
  console.log(razaDeperros);
}else{
  //hay que meterlo
  razaDeperros.push("Doberman");
  console.log(razaDeperros);
}
*/

/* 
FINDINDEX: 
Es muy similar al anterior, realiza una busqueda del elemento; pero en lugar de regresar el elemtno, resgresa sun indice, sino la encuentra nos devuelve un -1
Esta función es particularmente útil en elementos que necesitamos modificar de un arreglo original, dentro de una copia
*/

const indiceChihuahua = razaDeperros.findIndex((raza)=>raza==="Chihuahua");

if(indiceChihuahua>-1){
  //el resultado si esta dentro del arreglo
  console.log(razaDeperros[indiceChihuahua]);
  //aparte se va a agregar un texto
  razaDeperros[indiceChihuahua] += "(Es una raza de perros chiquita y escandalosa, NOTA: no me gusta)";
  console.log(razaDeperros[indiceChihuahua]);
    console.log(razaDeperros);
}