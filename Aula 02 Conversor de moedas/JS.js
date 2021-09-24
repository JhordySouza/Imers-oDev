function Converter() {
	var valorElemento = document.getElementById("Valor");
	var valor = valorElemento.value ;
	var valorEmDolarNumerico = parseFloat(valor);
	var valorEmReal = valorEmDolarNumerico * 5;
	var valorBtc = valorEmDolarNumerico * 0.000022;
	var valorEmReal2 = valorEmReal.toFixed(2)

		console.log(valorEmReal);

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em real: R$" + valorEmReal2;
		elementoValorConvertido.innerHTML = valorConvertido;
	
	var elementoValorConvertidoEmBtc = document.getElementById("valorConvertidoEmBtc")
	var valorConvertidoEmBtc = "O resultado em Bitcoin: " + valorBtc + "BTC"
	elementoValorConvertidoEmBtc.innerHTML = valorConvertidoEmBtc
	console.log(valorBtc);
	}