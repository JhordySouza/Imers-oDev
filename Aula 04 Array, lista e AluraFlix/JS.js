//  Colchetes são chamados de array eles são capazes de listar conteudos dentro da variavel definida

var listaFilmes = ["https://www.beiramarshopping.com.br/fmanager/beiramar2017/filmes/t/imagem_capa1639_3.jpg"
,"http://c1.staticflickr.com/3/2142/32824906362_ea063e56fb_o.jpg"
, "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2020/10/sem-saida-poster-pt.jpg"]

listaFilmes.push("")

// valor inicial; segundo parametro; 
for (var i = 0; i < listaFilmes.length; i++) {
	document.write("<img src=" + listaFilmes[i] + ">" );
}

console.log(listaFilmes.length)