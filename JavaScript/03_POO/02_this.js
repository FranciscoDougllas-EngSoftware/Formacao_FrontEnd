//this

//this é uma palavra reservada do JavaScript que faz referência ao objeto que está sendo executado no momento.

//Em métodos, this se refere ao objeto que chamou o método.
const pessoa = {
    nome: 'Joaquim',
    idad: 30,
    falar(){
        return `Olá, meu nome é ${this.nome}`;
        return this.nome;
    }
}

console.log(pessoa.falar());