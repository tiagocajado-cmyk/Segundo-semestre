//gemini

document.getElementById('bntcalcular').addEventListener('click', function() {
    const idade = document.getElementById('numeroInput').value;
    const divResultado = document.getElementById('resultado');

    if (idade === "") {
        alert("Por favor, digite uma idade.");
        return;
    }

    let mensagem = "";
    let classe = "";

    if (idade < 16) {
        mensagem = "🚫 Não pode votar.";
        classe = "nao-vota";
    } else if (idade >= 18 && idade <= 70) {
        mensagem = "✅ Voto Obrigatório!";
        classe = "obrigatorio";
    } else {
        mensagem = "⚠️ Voto Facultativo.";
        classe = "facultativo";
    }

    // Exibe o resultado com estilo
    divResultado.innerHTML = mensagem;
    divResultado.className = classe; // Limpa as classes anteriores e aplica a nova
    divResultado.style.display = "block";
});