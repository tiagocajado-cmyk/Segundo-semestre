function media() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseFloat(numeroInput.value);
    const numeroInput2 = document.getElementById("numeroInput2")
    let numero2 = parseFloat(numeroInput2.value);


    //Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("média")
    resultadoDiv.innerHTML = "";

    //Verificar se a entrada é um número válido.
    if (isNaN(numero)){
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>"
        return; //Este comando sai da função
    }
    if (isNaN(numero2)){
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>"
        return; //Este comando sai da função
    }



        let resultado = (numero + numero2)/2;
        resultadoDiv.innerHTML = resultado;
        
    }

const botaocalcular = document.getElementById("bntcalcular")
botaocalcular.addEventListener("click", media)

//---------------------------------------------------------------------------

function soma() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseFloat(numeroInput.value);
    const numeroInput2 = document.getElementById("numeroInput2")
    let numero2 = parseFloat(numeroInput2.value);


    //Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("soma")
    resultadoDiv.innerHTML = "";


        let resultado = (numero + numero2);
        resultadoDiv.innerHTML = resultado;
    }

const botaocalcular2 = document.getElementById("bntcalcular")
botaocalcular2.addEventListener("click", soma)

//-----------------------------------------------------------------------------

function produto() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseFloat(numeroInput.value);
    const numeroInput2 = document.getElementById("numeroInput2")
    let numero2 = parseFloat(numeroInput2.value);


    //Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("produto")
    resultadoDiv.innerHTML = "";


        let resultado = (numero * numero2);
        resultadoDiv.innerHTML = resultado;
    }

const botaocalcular3 = document.getElementById("bntcalcular")
botaocalcular2.addEventListener("click", produto)

//-----------------------------------------------------------------------------

function maior() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseFloat(numeroInput.value);
    const numeroInput2 = document.getElementById("numeroInput2")
    let numero2 = parseFloat(numeroInput2.value);


    //Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("maior")
    resultadoDiv.innerHTML = "";


        let resultado = Math.max(numero, numero2);
        resultadoDiv.innerHTML = resultado;
    }

const botaocalcular4 = document.getElementById("bntcalcular")
botaocalcular4.addEventListener("click", maior)

//-----------------------------------------------------------------------------

function menor() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseFloat(numeroInput.value);
    const numeroInput2 = document.getElementById("numeroInput2")
    let numero2 = parseFloat(numeroInput2.value);


    //Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("menor")
    resultadoDiv.innerHTML = "";


        let resultado = Math.min(numero, numero2);
        resultadoDiv.innerHTML = resultado;
    }

const botaocalcular5 = document.getElementById("bntcalcular")
botaocalcular4.addEventListener("click", menor)