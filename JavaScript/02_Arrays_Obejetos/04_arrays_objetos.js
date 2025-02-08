//Arrays em Objetos e Objetos em Arrays
const pessoa = {
    nome : 'Teste',
    idade : 22,
    trabalha: {
        empresa: 'Google',
        cargo: 'Desenvolvedor',
        salario: 10000,
        frutras: ['maçã', 'banana', 'laranja'],
        mais: ['novo', 'velho', 'usado']
    }
}

pessoa.temCarro = true;
console.log(pessoa);