//aprendendo sobre listas
var listaFilmes = ["Uma noite de Crimes","Uma noite de Crimes 2","Uma noite de Crimes 3"]
// elemento 		1 						2  						3
// indice 			0 						1  						2

//adicionando novos elementos indice 3
listaFilmes.push("Harry Potter 2 ");

//indice 4
listaFilmes.push("Harry Potter 3 ");

//indice 5
listaFilmes.push("Harry Potter 4 ");

//indice 6
listaFilmes.push("Harry Potter 5 ");

//  valor inicial.   condição.   expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
	document.write("<p>" + indice + "</p>");
	document.write("<p>" + listaFilmes[indice] + "</p>");
}

