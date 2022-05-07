function converte() {
    let valorInputString = window.document.querySelector("#valor");
    let valorInput = valorInputString.value;
    console.log(valorInput);
    let result = window.document.querySelector("#valorConvertido");
  
    let valorDolar = 5.06;
  
    let valorConvertido = parseFloat(valorDolar * valorInput);
  
    result.innerHTML = "O valor em dolar é U$: " + valorConvertido.toFixed(2);
  
    result.style.color = "green";
  
    document.querySelector("#valor").value = "";
  }
  
  function converteKmh() {
    let valorInputString = window.document.querySelector("#valorKmh");
    let valorinput = valorInputString.value;
    let result = window.document.querySelector("#valorConvertidoMs");
  
    let valorMs = 3.6;
    let valorConvertido = parseFloat(valorMs * valorinput);
    result.innerHTML =
      "O valor convertido é: " + valorConvertido.toFixed(2) + " m/s";
    result.style.color = "green";
  
    document.querySelector("#valorKmh").value = "";
  }
  
  function converteC() {
    let valorInputString = window.document.querySelector("#valorC");
    let valorInput = valorInputString.value;
    let result = window.document.querySelector("#valorConvertidoC");
  
    let conversao = parseFloat(valorInput * 1.8 + 32);
    result.innerHTML = "O valor convertido é: " + conversao.toFixed(2) + "°F";
    result.style.color = "green";
  
    document.querySelector("#valorC").value = "";
  }
  
  function resultados() {
    converte();
    converteKmh();
    converteC();
  }
  