function media() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseFloat(numeroInput.value);
    const numeroInput2 = document.getElementById("numeroInput2")
    let numero2 = parseFloat(numeroInput2.value);
    const numeroInput3 = document.getElementById("numeroInput3")
    let numero3 = parseFloat(numeroInput3.value);
    const numeroInput4 = document.getElementById("numeroInput4")
    let numero4 = parseFloat(numeroInput4.value);



    //Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("média")
    resultadoDiv.innerHTML = "";
    const statusDiv = document.getElementById("status")
    statusDiv.innerHTML = "";

    //Verificar se a entrada é um número válido.
    if (isNaN(numero)){
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>"
        return; //Este comando sai da função
    }
    if (isNaN(numero2)){
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>"
        return; //Este comando sai da função
    }
    //Verificar se a entrada é um número válido.
    if (isNaN(numero3)){
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>"
        return; //Este comando sai da função
    }
    if (isNaN(numero4)){
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>"
        return; //Este comando sai da função
    }



        let resultado = (numero + numero2 + numero3)/3;
        resultadoDiv.innerHTML = resultado;
        
    
        if (resultado >= numero4){
            statusDiv.innerHTML = "<p>Aprovado!</p>"
        }else{ statusDiv.innerHTML = "<p>Reprovado!</p>"
        }
        
    }

const botaocalcular = document.getElementById("bntcalcular")
botaocalcular.addEventListener("click", media)
