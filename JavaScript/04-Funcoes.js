//Funcoes em JavaScript

//Definingo uma Fncao e retornando um valor
function soma(a, b){
    return a + b;
}
console.log("A Soma e ", soma(2, 5));

//Definindo uma funcao e nao retornando um valor
function sub(a, b){
    console.log("A Subtracao e ", a - b);
}

//Chamando a funcao
sub(5, 2);


//Funcao anonim
const mult = function(n, b){
    return n * b;
}
console.log(mult(4, 5));