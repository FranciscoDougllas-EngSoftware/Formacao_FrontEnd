"use strict";

//Escopo da Funcoes
var dados = function dados() {
  var soma = function soma(a, b) {
    return a + b;
  };

  var dividir = function dividir(a, b) {
    return a / b;
  };
};

console.log(dados(soma(2, 5)));
console.log(dados(dividir(10, 2)));