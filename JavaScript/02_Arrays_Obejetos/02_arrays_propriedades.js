//Propriedades dos arrays
const array = ['Banana', 'Maça', 'Pera', 'Uva', 'Melancia'];
console.log(array.length); //5
console.log(array[0].length); //6
console.log(array[1].length); //4

console.log("")
//Metodos dos arrays
//Metodo push
array.push('Limao');
console.log(array);

//Metodo pop
array.pop();
console.log(array);

//Metodo shift
array.shift();
console.log(array);

//Metodo unshift
array.unshift('Banana');
console.log(array);