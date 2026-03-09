//novos recursos do ES6

// Vetor de numeros
const numeros = [1, 2, 3, 4, 5];

console.log("Exebindo números do vetor:")
console.log(numeros)

console.log("\nMultiplicando números do vetor por 2:")
const numerosMultiplicados = numeros.map(n => n * 2)
console.log(numerosMultiplicados)

console.log("\nFiltrando números pares do vetor:")
const numerosPares = numeros.filter(n => n % 2 === 0)
console.log(numerosPares)

console.log("\nSomando todos os números do vetor:")
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
console.log(soma)