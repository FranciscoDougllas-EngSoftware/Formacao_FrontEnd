//ForEach
//O método forEach() executa uma dada função em cada elemento de um array.
//forEach() não retorna nada.
//Sintaxe

//array.forEach(function(currentValue, index, arr), thisValue)
//currentValue	Obrigatório. O valor do elemento atual
//index	Obrigatório. O index do elemento atual
//arr	Obrigatório. O array sendo percorrido

//thisValue	Opcional. Um valor a ser passado para a função a ser usado como seu "this"

const array = ['Banana', 'Maça', 'Pera', 'Uva', 'Melancia'];
array.forEach((item, index) => {
    console.log(item, index);
});