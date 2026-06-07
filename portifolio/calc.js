function obterValores() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    return { n1, n2 };
}

function somar() {
    let { n1, n2 } = obterValores();
    document.getElementById("resultado").textContent = n1 + n2;
}

function subtrair() {
    let { n1, n2 } = obterValores();
    document.getElementById("resultado").textContent = n1 - n2;
}

function multiplicar() {
    let { n1, n2 } = obterValores();
    document.getElementById("resultado").textContent = n1 * n2;
}

function dividir() {
    let { n1, n2 } = obterValores();

    if (n2 === 0) {
        document.getElementById("resultado").textContent =
            "Não é possível dividir por zero";
        return;
    }

    document.getElementById("resultado").textContent = n1 / n2;
}