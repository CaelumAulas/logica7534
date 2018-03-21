function pegaNumeroDoUsuario(mensagem) {
    return parseFloat(prompt(mensagem).replace(",",".").replace("o","0").replace("l","1"));
}
function conversaoDeNumero(numero) {
    var valor_convertido=numero.toFixed(2).replace(".",",");
    return valor_convertido;
}