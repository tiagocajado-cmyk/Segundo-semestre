const listaDeusoarios = [
    {nome: "Ana", nota: 5},
    {nome: "Maria", nota: 2},
    {nome: "Joana", nota: 7},
    {nome: "Jóse", nota: 6}
    
]

const usuarioEncontrado2 = listaDeusoarios.find(u => u.nota === 6)
console.log(usuarioEncontrado2)
console.log(`Nome: ${usuarioEncontrado2.nome} \nNota: ${usuarioEncontrado2.nota}`)

console.log("\nNa lista de usuários, somando todas as idades: ")
const somaIdades = listaDeusoarios.reduce((total, usuario) => total + usuario.nota/listaDeusoarios.length, 0)
console.log(somaIdades)

console.log("\nFiltrando notas menores de 5.")
const menoridade = listaDeusoarios.filter(u => u.nota < 5)
//use as {} caso precise de mais de uma linha.
//neste caso não precisa, por isso não vamos usar.
menoridade.forEach( u => 
    console.log(`${u.nome}.`)
)

console.log("\nFiltrando notas maior de 6.")
const maioridade = listaDeusoarios.filter(u => u.nota > 6)
//use as {} caso precise de mais de uma linha.
//neste caso não precisa, por isso não vamos usar.
maioridade.forEach( u => 
    console.log(`${u.nome}.`)
)