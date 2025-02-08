const mult = function(m, n){
    if(n === undefined){
        return m;
    }else{
        return m * n;
    }
}

console.log(mult(2,2));
console.log(mult(2));


//Argumentos Default
const mult2 = function(m, n = 1){
    return m * n;
}

console.log(mult2(2,2));
console.log(mult2(2));

//Closure
const raiz = function(n){
    return n ** 0.5;
}