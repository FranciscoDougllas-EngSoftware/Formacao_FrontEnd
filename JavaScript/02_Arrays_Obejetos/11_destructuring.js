//Destructuring
const pessoa = {
    nome: 'Luiz',
    idade: 22,
    endereco: { rua: 'Av Brasil', numero: 320 }
}

const { nome, idade } = pessoa;
const { nome: n, idade: i } = pessoa;
const { sobrenome, bemHumorada = true } = pessoa;
const { rua, numero } = pessoa.endereco;

console.log(nome, idade, n, i, sobrenome, bemHumorada, rua, numero);