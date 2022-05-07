var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentaivas = 3;
var i = 0;

function Chutar() {
  var valor = parseInt(document.querySelector("#valor").value);
  var resultado = document.querySelector("#resultado");

  if (i < numeroTentaivas) {
    if (valor == numeroSecreto) {
      resultado.innerHTML = "Você ACERTOU e o numero era " + numeroSecreto;
      resultado.style.color = "green";
      console.log("1");
      i = 0;
    } else {
      resultado.innerHTML = "Você ERROU o numero";
      resultado.style.color = "red";
      i++;
      console.log(i);
    }
  } else {
    resultado.innerHTML =
      "Você EXCEDEU o numero de tentativas, o numero era " + numeroSecreto;
    resultado.style.color = "red";
    i = 0;
  }
}

console.log(numeroSecreto);
