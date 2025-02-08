//Classes Basicas em JavaScript
const cachorro = {
    raca: null,
    latir: function(){
        return "Latir";
    }
}

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemao";
console.log(pastorAlemao.raca);
console.log(pastorAlemao.latir());