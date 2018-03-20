function pegaNumeroDoUsuario() {
    return parseFloat(prompt(mensagem_do_prompt).replace(",",".").replace("o","0").replace("l","1"));
}
function conversaoDeNumero() {
    var valor_convertido=valor.toFixed(2).replace(".",",");
    return valor_convertido;
}