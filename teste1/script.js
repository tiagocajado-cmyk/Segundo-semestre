function gerar() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>";
        return;
    }

    const titulo = document.createElement("h2");
    titulo.textContent = "O que sobrou pro beta:";
    resultadoDiv.appendChild(titulo);

    let tamanhoFonte = 12;

    for (let i = 1; i <= numero; i++) {
        const p = document.createElement("p");
        p.textContent = "NADA!";
        p.style.fontSize = tamanhoFonte + "px";

        resultadoDiv.appendChild(p);

        tamanhoFonte += 2;
    }
}

const botaoGerar = document.getElementById("bntcalcular");
botaoGerar.addEventListener("click", gerar);