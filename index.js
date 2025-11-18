const prompt = require("prompt-sync")()

function verificaIdade(idade){
    if(idade > 17){
        console.log("Atleta fora de idade!")
    }else if(idade <= 14){
        console.log("Atleta não tem a idade idade adequada!")
    }else{
        console.log("Você tem a idade adequada para jogar o campeonato")
    }
}

let atletas = {}
let atleta = [atletas]

console.log("Bem vindo ao cadastro de atletas do campeonato sub 17 de futsal")
console.log("Nesse cadastro você tera que colocar o nome do atleta a sua idade e a posição que joga ")

for(let i = 0; i < 6; i++ ){
[atleta[0].`nome${i}`] = prompt("Digite o nome do atleta: ")
atletas.idade = parseInt(prompt("Digite a idade do atleta: "))
atletas.posicao = prompt("Digite a posição que o atleta joga: ")
verificaIdade(atletas.idade)
console.log(atletas)
}