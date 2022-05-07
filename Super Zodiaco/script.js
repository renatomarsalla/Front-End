var cavaleiro1 = {
    nome: "Seiya de Pégaso",
    imagem:
      "https://i.pinimg.com/originals/44/d8/10/44d8104cecb670b387e3465786add8b9.jpg",
    atributos: {
      ataque: 8,
      defesa: 5,
      magia: 7
    }
  };
  
  var cavaleiro2 = {
    nome: "Shiryu de Dragão",
    imagem:
      "http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
      ataque: 9,
      defesa: 6,
      magia: 6
    }
  };
  
  var cavaleiro3 = {
    nome: "Hyoga de Cisne",
    imagem:
      "https://www.cavzodiaco.com.br/imagens-cards/galaxycards/hyoga/1589.jpg",
    atributos: {
      ataque: 7,
      defesa: 7,
      magia: 6
    }
  };
  
  var cavaleiro4 = {
    nome: "Shun de Andrômeda",
    imagem:
      "https://i.pinimg.com/originals/84/2f/f8/842ff87b53121db6488586b6d9caf516.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 4
    }
  };
  
  var cavaleiros = [cavaleiro1, cavaleiro2, cavaleiro3, cavaleiro4];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cavaleiros[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 4);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 4);
    }
    cartaJogador = cavaleiros[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.querySelector("#btnJogar").disabled = false;
    document.querySelector("#btnSortear").disabled = true;
  
    exibirOpcoes();
    exibirCartaJogador();
  }
  
  var opcoes;
  function exibirOpcoes() {
    opcoes = document.querySelector("#opcoes");
    var opcoesAtributos = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesAtributos +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo;
    }
    // opcoes.innerHTML = opcoesAtributos;
  }
  
  function obtemAtributoSelecionado() {
    var atributos = document.getElementsByName("atributo");
    for (var i = 0; i < atributos.length; i++) {
      if (atributos[i].checked == true) {
        return atributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributos = document.getElementsByName("atributo");
    var divResultado = document.querySelector("#resultado");
    for (var i = 0; i < atributos.length; i++) {
      if (
        atributos[0].checked == false &&
        atributos[1].checked == false &&
        atributos[2].checked == false
      ) {
        alert("Selecione um ATRIBUTO");
        document.querySelector("#btnSortear").disabled = false;
        document.querySelector("#btnJogar").disabled = true;
        for (var i = 0; i < atributos.length; i++) {
          atributos[i].hidden = true;
        }
        opcoes.innerHTML = "";
        return;
      }
    }
    var atributoSelecionado = obtemAtributoSelecionado();
    var resultado = document.querySelector("#resultado");
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      HtmlResultado = "<p class='resultado-final'>Venceu</p>";
  
      var opcoesAtributos = "";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      HtmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      HtmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    resultado.innerHTML = HtmlResultado;
  
    document.querySelector("#btnJogar").disabled = true;
  
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status'>";
    var opcoesTextos = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTextos +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
  
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML =
      moldura + nome + tagHtml + opcoesTextos + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status'>";
    var opcoesTextos = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTextos +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo];
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML =
      moldura + nome + tagHtml + opcoesTextos + "</div>";
  }
  