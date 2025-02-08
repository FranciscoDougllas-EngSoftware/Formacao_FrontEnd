//Assertions await
//await e usado para aguardar uma promisse ser resolvida    
//await e usado para aguardar uma promisse ser rejeitada
//await e usado para aguardar uma promisse ser resolvida ou rejeitada

async function somarComDelay(a, b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b);
        }, 1000);
    });
}

somarComDelay(1, 2).then(resultado => {
    console.log(resultado);
});