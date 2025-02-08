//Prototype
//Prototype é um objeto que contém métodos e propriedades que podem ser acessados por todos os objetos que são criados através dele.

//Por exemplo, todos os objetos criados a partir de um construtor terão acesso aos métodos e propriedades do prototype desse construtor.

//Vamos ver um exemplo:

/*************  ✨ Codeium Command 🌟  *************/
/**
 * Construtor de objetos do tipo Pessoa.
 * 
 * @param {string} nome - O nome da pessoa.
 * @param {number} idade - A idade da pessoa.
 * 
 * @returns {Pessoa} O objeto criado.
 */
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

const pessoa1 = new Pessoa('Joaquim', 30);