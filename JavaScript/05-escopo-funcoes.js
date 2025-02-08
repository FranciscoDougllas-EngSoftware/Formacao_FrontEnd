//Escopo da Funcoes
const dados = (function(){
    const soma = function(a, b){
        return a + b;
    }
    const dividir = function(a, b){
        return a / b;
    }
    return{
        soma: soma,
        dividir: dividir
    }
})();

console.log(dados.soma(2, 5));
console.log(dados.dividir(10, 2));