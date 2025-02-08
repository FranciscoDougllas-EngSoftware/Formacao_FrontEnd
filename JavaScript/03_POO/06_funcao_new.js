//Utilizando o new
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.falar = function() {
        console.log(`Oi, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
    this.getIdade = function() {
        return this.idade;
    }
    this.getNome = function() {
        return this.nome;
    }
    this.aniversario = function() {
        this.idade++;
    }
}

const pessoa1 = new Pessoa("Joao", 30);
console.log(pessoa1.getNome());