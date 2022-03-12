let obj = {
    nombre: 'Ana',
    edad: 19,
    apellido: 'Carrizales',
    keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouseOver: function () {
        console.log('El puntero del mouse esta arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre';
console.log(obj[myKey]);

/* Se imprime el contenido de nombre en este caso se muestra el 
valor de Ana, ya que en las lineas 7 y 8 le pedimos
que imprima lo que contiene el parámetro nombre de nuestro objeto
y en las lineas 10 y 11 creamos una variable que contiene la palabra nombre
y le pedimos que del objeto creado nos muestre el parámetro del nombre que contiene
nuestra variable
*/

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

/* Se imprime lo que hau en la función keypress del objeto creado, al igual que 
la función de mouseOver gracias a la variable myKey a la que se le asigna el nombre de
las funciones para que se muestre lo que la función hace */

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("hola desde el array");
})

console.log(myArray);

/* A nuestro array que hemos declarado como vacío al principio se
le han insertado los siguientes datos: 4, 'una cadena', el objeto que creamos junto
con sus variables y funciones, y una función que se muestra como anónima  */


console.log(myArray[2].mouseOver()); // Se muestra el mensaje que contiene la función mouseOver apuntando la posición del array e invocando a la función.
console.log(myArray[3]()); //Se muestra el mensaje que contiene la función anónima por medio de un señalamiento de la posición del array y colocándo parentesís puesto que la función no tiene nombre

let funcArray = [];

funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3");
});

funcArray.forEach((item) => {
    item();
});
// Ejecuta las funciones indicadas una vez por elemento del array en este caso imprime function1, function2 y function3


