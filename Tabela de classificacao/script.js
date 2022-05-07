
function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas;
    return pontos;
  }
  
 
  
  function exibeJogadores(listaDeJogadores) {
    var elemento = "";
    for (var i = 0; i < jogadoresAdicionados.length; i++) {
      elemento += "<tr><td>" + jogadoresAdicionados[i].nome + "</td>";
      elemento += "<td>" + jogadoresAdicionados[i].vitorias + "</td>";
      elemento += "<td>" + jogadoresAdicionados[i].empates + "</td>";
      elemento += "<td>" + jogadoresAdicionados[i].derrotas + "</td>";
      elemento += "<td>" + jogadoresAdicionados[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      // "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
  
    var tabelaJogadores = document.querySelector("#tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  
  // exibeJogadores(jogadores);
  
  function adicionarVitoria(i) {
    // var jogador = jogadores[i];
    var jogador = jogadoresAdicionados[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    // colocaNaTabela(jogadoresAdicionados);
    exibeJogadores(jogadoresAdicionados);
  }
  
  function adicionarEmpate(i) {
    var jogador = jogadoresAdicionados[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadoresAdicionados);
  }
  
  function adicionarDerrota(i) {
    // var jogador = jogadores[i];
    var jogador = jogadoresAdicionados[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    // colocaNaTabela(jogadoresAdicionados);
    exibeJogadores(jogadoresAdicionados);
    // exibeJogadores(jogadores);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  var jogadoresAdicionados = [];
  
  var recebeJogadorHtml = "";
  function adicionarJogador() {
    recebeJogadorHtml = document.querySelector("#name").value;
    // console.log(recebeJogadorHtml);
    if (recebeJogadorHtml != "") {
      var jogado = {
        nome: recebeJogadorHtml,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
      };
  
      jogadoresAdicionados.push(jogado);
      document.querySelector("#name").value = "";
      colocaNaTabela(jogado);
    }
  }
  
  function colocaNaTabela(jogadorQueFoiAdicionado) {
    for (var i = 0; i < jogadoresAdicionados.length; i++) {
      var elemento = "";
      elemento += "<tr><td>" + jogadoresAdicionados[i].nome + "</td>";
      elemento += "<td>" + jogadoresAdicionados[i].vitorias + "</td>";
      elemento += "<td>" + jogadoresAdicionados[i].empates + "</td>";
      elemento += "<td>" + jogadoresAdicionados[i].derrotas + "</td>";
      elemento += "<td>" + jogadoresAdicionados[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
    var tabelaJogadores = document.querySelector("#tabelaJogadores");
    tabelaJogadores.innerHTML += elemento;
    console.log(jogadorQueFoiAdicionado);
    // exibeJogadores(jogadoresAdicionados);
  }
  