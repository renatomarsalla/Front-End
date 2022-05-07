
function leitura(nota1, nota2, nota3, nota4){
    
    return ((nota1+nota2+nota3+nota4)/4);
}

function calculoMedia(){

    let valor1 = Number(window.document.getElementById('nota1').value);
    let valor2 = Number(window.document.getElementById('nota2').value);
    let valor3 = Number(window.document.getElementById('nota3').value);
    let valor4 = Number(window.document.getElementById('nota4').value);
    //let valor_valor1 = Number(valor1.value);
    let resultado = window.document.querySelector('.result');

    let media = leitura(valor1, valor2, valor3, valor4);
    if(media > 6){
        resultado.innerHTML = "Aprovado";
        resultado.style.color = 'green';
    }
    else {
        resultado.innerHTML = "Reprovado";
        resultado.style.color = 'red';
    }


    document.getElementById('nota1').value='';
    document.getElementById('nota2').value='';
    document.getElementById('nota3').value='';
    document.getElementById('nota4').value='';
}



