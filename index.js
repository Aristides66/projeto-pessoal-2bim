const prompt = require("prompt-sync")()

function verificaIdade(idade){
    if(idade > 17){
        console.log("Atleta fora de idade! escolha um jogador mais jovem.")
    } else if(idade <= 14){
        console.log("Atleta não tem a idade adequada para jogar o campeonato!")
    } else {
        console.log("Atleta tem a idade adequada para jogar o campeonato")
    }
}

let atletas = []  

console.log("Bem vindo ao cadastro de atletas do campeonato sub 17 de futsal")
console.log("Nesse cadastro você tera que colocar o nome da equipe, o nome dos atleta, a sua idade e a posição que joga.")
let nomeEquipe = prompt("Digite o nome da equipe:")
for (let i = 0; i < 7; i++) {

    let atleta = {}   

    atleta.nome = prompt(`Digite o nome do ${i+1}º atleta: `)
    atleta.idade = parseInt(prompt(`Digite a idade do ${i+1}° atleta: `))
    atleta.posicao = prompt(`Digite a posição que o ${i+1}° atleta joga: `)

    verificaIdade(atleta.idade)

    atletas.push(atleta) 
    console.log(atleta)
}

console.log("\nLista completa de atletas cadastrados:")
console.log(`${nomeEquipe}`)
console.log(atletas)