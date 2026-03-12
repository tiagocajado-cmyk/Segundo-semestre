// vetor de objetos

const listaDenomes = ["Ana, Maria, Joana"]


//vetor de objetos com dados de nome e idade
//Um objeto carreha dados como uma classe
const listaDeusoarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "Jóse", idade: 15}
    
]

const listaNumeros = [12, 15, 74, 83]



// pecorrendo e exibindo os elementos do vetor
//ForEach é uma função com laço de repetição
console.log("Exibindo todos os usuários do vetor.")
listaDeusoarios.forEach( u => {
    console.log(`${u.nome} tem ${u.idade} anos.`)
})

//como os antigos.
console.log("\nExibindo todos os usoários do vetor.")
for (let i = 0; i < listaDeusoarios.length; i++) {
    console.log(`${listaDeusoarios[i].nome} tem ${listaDeusoarios[i].idade} anos.`)
    console.log("SENAI")
}

console.log("\nFiltrando maiores de 18.")
const maioridade = listaDeusoarios.filter(u => u.idade >= 18)
//use as {} caso precise de mais de uma linha.
//neste caso não precisa, por isso não vamos usar.
maioridade.forEach( u => 
    console.log(`${u.nome} tem ${u.idade} anos.`)
)

console.log("\nFiltrando menores de 18.")
const menoridade = listaDeusoarios.filter(u => u.idade <= 17)
//use as {} caso precise de mais de uma linha.
//neste caso não precisa, por isso não vamos usar.
menoridade.forEach( u => 
    console.log(`${u.nome} tem ${u.idade} anos.`)
)


console.log("\nExibindo lista de nomes.")
listaDenomes.forEach( u => {
    console.log(u)
})

console.log("\nNa lista de números, filtre e mostre apenas numeros pares.")
const numerosPares = listaNumeros.filter(n => n % 2 == 0)
console.log(numerosPares)

console.log("\nNa lista de Usuários, exibindo  apenas os nomes.")
const nomes = listaDeusoarios.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuários, encontre um usuário.")
const usuarioEncontrado = listaDeusoarios.find(u => u.nome === "Ana")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nNa lista de usuários, encontre um usuário com idade de 45 anos.")
const usuarioEncontrado2 = listaDeusoarios.find(u => u.idade === 45)
console.log(usuarioEncontrado2)
console.log(`Nome: ${usuarioEncontrado2.nome} \nIdade: ${usuarioEncontrado2.idade}`)

console.log("\nNa lista de usuários, somando todas as idades: ")
const somaIdades = listaDeusoarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaIdades)


