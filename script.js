function verificarNumero(){

    // cria referência aos elementos da página
    const inNumero = document.getElementById("inNumero");
    const outDivisores = document.getElementById("outDivisores");
    const outResposta = document.getElementById("outResposta");

    // obtém o numero
    const numero = Number(inNumero.value);


    // verifica validade do número
    if (numero === 0 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    // como 1 é um divisor universal, já iniciamos com ele
    var divisores = "Divisores do " + numero + ": 1";
    var soma = 1;

    // percorre os possiveis divisores e acumula
    for(var i = 2; i <= numero / 2; i++){
        if(numero % i == 0){
            divisores = divisores + ", " + i;
            soma = soma + i;
        }
    }

    divisores = divisores + " (Soma: " + soma + ")";

     // altera o conteúdo de outDivisores
    outDivisores.textContent = divisores;

// verifica se é perfeito e exibe resposta na tag outResposta
if (numero == soma){
    outResposta.textContent = numero + " é um Número Perfeito";

} else {
    outResposta.textContent = numero + " não é um numero perfeito"
}

}

// referencia elemento e após associa function ao evento click
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero);