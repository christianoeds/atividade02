//calculo de juro simples
function juros(c,i) {
    resultado =  (c * i) /1000;
    return resultado;
}

//calculo de juro composto
function jurosCompostos(c, i, t) {
    resultado = c * (1 + i)^t;
    return resultado;
}