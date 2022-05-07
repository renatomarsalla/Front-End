var listandoFilmes = [];
var nomeFilme;

function adicionarFilme() {
  var filmeFavorito = document.querySelector("#filme").value;
  nomeFilme = document.querySelector("#filmeNome").value;
  if (
    filmeFavorito.endsWith(".jpg") &&
    filmeFavorito != "" &&
    nomeFilme != ""
  ) {
    listarFilme(filmeFavorito);
    listandoFilmes.push(filmeFavorito);
    imprimeListaFilmes();
  } else {
    console.error("Formato da imagem errada ou algum campo esta vazio");
  }

  document.querySelector("#filme").value = "";
  document.querySelector("#filmeNome").value = "";
}

function listarFilme(filme) {
  if (listandoFilmes.indexOf(filme) > -1) {
    alert("Esse filme ja esta na lista");
    return;
  }
  var elementoHtmlInserir =
    "<img src=" +
    filme +
    ">" +
    "<figcaption style=" +
    "font-size:50px" +
    ";color:white" +
    ">" +
    nomeFilme +
    "</figcaption";
  var listaFilmes = document.querySelector("#listaFilmes");
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoHtmlInserir;
}

function imprimeListaFilmes() {
  for (var i = 0; i < listandoFilmes.length; i++) {
    console.log(listandoFilmes[i]);
  }
}
