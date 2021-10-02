
function cauculaPontos(jogador) {
	var pontos = jogador.vitorias * 3 + jogador.empates;
	return pontos;
}


var jogadores = [];
console.log(jogadores)

function exibeJogadoresNaTela(jogadores) {
	var elemento = "";
	for (var i = 0; i < jogadores.length; i++) {
		elemento += "<tr><td>" + jogadores[i].nome + "</td>";
		elemento += "<td>" + jogadores[i].vitorias + "</td>";
		elemento += "<td>" + jogadores[i].empates + "</td>";	
		elemento += "<td>" + jogadores[i].derrotas + "</td>";
		elemento += "<td>" + jogadores[i].pontos + "</td>";
		elemento += "<td><button onClick='adicionarVitorias("+ i +")'>Vitória</button></td>"
		elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
		elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
		elemento += "</tr>";

		}
	var tabelaJogadores = document.getElementById("tabelaJogadores");
	tabelaJogadores.innerHTML = elemento;
	
}

exibeJogadoresNaTela(jogadores);

function adicionarVitorias(i) {
	var jogador = jogadores[i] 
	jogador.vitorias++
	jogador.pontos = cauculaPontos(jogador)
	exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
	var jogador = jogadores[i] 
	jogador.empates++
	jogador.pontos = cauculaPontos(jogador)
	exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
	var jogador = jogadores[i] 
	jogador.derrotas++
	jogador.pontos = cauculaPontos(jogador)
	exibeJogadoresNaTela(jogadores);
}

function Adicionar(i) {
	var nomeDoJogador = document.getElementById("nomeDoJogador").value
	var NovoJogador = {nome:"nome", vitorias:0, empates:0, derrotas:0, pontos:0};
	NovoJogador.nome = nomeDoJogador;
	nomeDoJogador = NovoJogador
	jogadores.push(nomeDoJogador);
	exibeJogadoresNaTela(jogadores);
	
}

function zerarPlacar(zerado) {
console.error("Botão não configurado!!")
}