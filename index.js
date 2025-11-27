const prompt = require("prompt-sync")()

function verificaIdade(idade){
    if(idade > 17){
        console.log("Atleta fora de idade!")
    } else if(idade <= 14){
        console.log("Atleta não tem a idade adequada!")
    } else {
        console.log("Você tem a idade adequada para jogar o campeonato")
    }
}

let atletas = []  

console.log("Bem vindo ao cadastro de atletas do campeonato sub 17 de futsal")
console.log("Nesse cadastro você tera que colocar o nome do atleta, a sua idade e a posição que joga.")
let nomeEquipe = prompt("Digite o nome da equipe:")
for (let i = 0; i < 6; i++) {

    let atleta = {}   

    atleta.nome = prompt(`Digite o nome do ${i+1}º atleta: `)
    atleta.idade = parseInt(prompt("Digite a idade do atleta: "))
    atleta.posicao = prompt("Digite a posição que o atleta joga: ")

    verificaIdade(atleta.idade)

    atletas.push(atleta) 
    console.log(atleta)
}

console.log("\nLista completa de atletas cadastrados:")
console.log(atletas)
console.log(`${nomeEquipe}`)