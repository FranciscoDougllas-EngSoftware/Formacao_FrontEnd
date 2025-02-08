//FUncoes como Classes
const cachorro =  {
    uivar: function(){
        console.log("Auuuuuuuuuuuuuu");
    }
}

cachorro.uivar();

const pastorAlemao = Object.create(cachorro);
pastorAlemao.uivar();