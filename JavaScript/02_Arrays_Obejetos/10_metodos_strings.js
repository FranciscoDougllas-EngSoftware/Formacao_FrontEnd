//Metodos em Strings
const string = 'Ola Mundo';
console.log(string.length); //11
console.log(string.toUpperCase()); //OLA MUNDO

//Metodo trim
const string2 = '   Ola Mundo   ';
console.log(string2.trim()); //Ola Mundo

//Metodo padStart
const string3 = 'Ola';
console.log(string3.padStart(10, '*')); //*****Ola

//Metodo padEnd
const string4 = 'Ola';
console.log(string4.padEnd(10, '*')); //Ola*****

//Split
const string5 = 'Ola Mundo';
console.log(string5.split(' ')); //[ 'Ola', 'Mundo' ]

//Join
const array = ['Ola', 'Mundo'];
console.log(array.join(' ')); //Ola Mundo

//Repeat
const string6 = 'Ola';
console.log(string6.repeat(3)); //OlaOlaOla

//Rest operator
const array2 = ['Ola', 'Mundo'];
console.log(...array2); //Ola Mundo

//For of
const array3 = ['Ola', 'Mundo'];
for (const value of array3) {
  console.log(value);
}