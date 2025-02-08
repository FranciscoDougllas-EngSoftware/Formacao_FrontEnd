//Objetos
//Objetos são estruturas de dados que representam um conjunto de propriedades, que são pares de chave e valor.
//As propriedades de um objeto podem ser de qualquer tipo de dado, inclusive funções.

const pessoa = {
    nome : 'Mateus',
    idade : 22,
    trabalha: {
        empresa: 'Google',
        cargo: 'Desenvolvedor',
        salario: 10000
    }
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.trabalha.empresa);

//Adicionando propriedades
pessoa.casado = false;
console.log(pessoa);