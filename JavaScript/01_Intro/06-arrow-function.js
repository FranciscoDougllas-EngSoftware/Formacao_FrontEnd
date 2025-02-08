//Arrow Functions
const soma = (a,b) => a + b;
console.log(soma(2,2));


//Com argumentos
const ParImpar = (n) => {
    if(n % 2 === 0){
        return 'Par';
    }else{
        return 'Impar';
    }
}
console.log(ParImpar(2));
console.log(ParImpar(3));


//Mais Sobre Arrow Functions
const raiz = (x) => Math.sqrt(x);
console.log(raiz(9));
console.log(raiz(12).toFixed(2));