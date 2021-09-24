var numeroSecreto = parseInt (Math.random() *11)

function Chutar() {
	var chute = parseInt (document.getElementById("valor").value);
	var elementoResultado = document.getElementById("resultado");
	

	if (chute == numeroSecreto) {
		elementoResultado.innerHTML = "Parabéns, Você acertou!!! o número da sorte éra: " + chute;
	} else if (chute > 10 || chute < 0) {
		elementoResultado.innerHTML = "Por favor! digite um número de 0 a 10";

	} else if (chute > numeroSecreto) {
		elementoResultado.innerHTML = "Você errou!! o numero Secreto é menor que " + chute;
	} else {
		elementoResultado.innerHTML = "Você errou!! o número secreto é maior que " + chute;
    }
}