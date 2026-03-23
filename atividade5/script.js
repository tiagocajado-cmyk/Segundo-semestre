function gerar() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);


    //Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML = "";

    //Verificar se a entrada é um número válido.
    if (isNaN(numero) || numero === null || numero === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>"
        return; //Este comando sai da função
    }

    let valor;

    if (numero >= 12) {
        valor = 1
    }else {
        valor = 1.3
    }
    
    let total = numero * valor;
    //Adicionar título para a tabuada.
    resultadoDiv.innerHTML = `<h2>O valor de sua compra foi: ${total}</h2>`;
}

const botaocalcular = document.getElementById("bntcalcular")
botaocalcular.addEventListener("click", gerar)
