const listaDenomes = ["Tiago", "Rita", "Willy"]

console.log("Exibindo todos os elementos:")
console.log(listaDenomes)

console.log("\nExbindo apenas o primeiro elemento: ")
console.log(listaDenomes[0])

console.log("\nAdicionando um elemento: ")
listaDenomes.push("Nalvinha")
console.log(listaDenomes)

listaDenomes.push("Alice")
console.log(listaDenomes)

console.log("\nRemovendo um elemento: ")

listaDenomes.splice(2, 1)
console.log(listaDenomes)

listaDenomes.splice(1, 1)
console.log(listaDenomes)

listaDenomes.push("Marise")
console.log(listaDenomes)

console.log("\nRemovendo o ultimo elemento: ")
listaDenomes.pop()
console.log(listaDenomes)

console.log("\nRemovendo o primeiro elemento: ")
listaDenomes.shift()
console.log(listaDenomes)