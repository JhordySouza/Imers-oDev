var Rafa = {nome:"Rafa", vitorias:0, empates:0, derrotas:0, pontos:0};
var Paulo = {nome:"Paulo", vitorias:0, empates:0, derrotas:0, pontos:0};
var Guilherme = {nome:"Guilherme", vitorias:0, empates:0, derrotas:0, pontos:0};

function cauculaPontos(jogador) {
	var pontos = jogador.vitorias * 3 + jogador.empates;
	return pontos;
}

Rafa.pontos = cauculaPontos(Rafa);
Paulo.pontos = cauculaPontos(Paulo);
Guilherme.pontos = cauculaPontos(Guilherme);

var jogadores = [Rafa, Paulo, Guilherme];


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
