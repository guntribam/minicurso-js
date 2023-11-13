const content = 
`//Chamamos de destruturação, o ato de obter alguma propriedade de um objeto ou valor de um array direto em uma variável
const pessoa = {
    nome: "Cardosa",
    profissao: "Químico",
    renda: 40000,
}

//com a destruturação podemos obter o nome do objeto pessoa da seguinte forma
const {nome} = pessoa
console.log(nome)

//podemos pegar mais de uma propriedade
const {profissao, renda} = pessoa
//console.log(profissao, renda)

//Podemos fazer isso com arrays também, fique atento às diferenças
const [valor1, valor2] = ["gunter", "juliana", "dante"]
//console.log(valor1, valor2)

//Outra forma de usar a destruturação é diretamente em funções
//Ao invés da função à seguir receber diretamente um parâmetro do objeto pessoa, ele já está destruturado

let imprimePessoa = ({nome, profissao, renda}) => {
    console.log("O " + nome + " trabalha como " + profissao + " e ganha R$ " + renda)
}

//O operador Rest é utilizado para fazer cópias em objetos, por exemplo
const outraPessoa = {
    ...pessoa,
    nome: "Jorge"
}
//console.log(outraPessoa)

//Com ele podemos copiar todas as propriedades do objeto pessoa em outro objeto e sobrescrever somente o que for interessante

//Podemos fazer com arrays também, mas observe as diferenças
const [nome1, nome2, ...outrosNomes] = ["Matheus", "Leandra", "Telles", "Ilma"]
//console.log(valor1, valor2, outrosNomes)


//Retomando a função de criação de um botão html, podemos adotar a seguinte estratégia
//Podemos passar um objeto para a função para evitar a longa lista de parâmetros
//Caso o usuário não forneça uma propriedade específica do objeto, usamos o nullish coalescing para obter outro valor

let criarBotaoHtml = ({fontFamily, padding, bgColor, textColor, fontWeight, radius, borderWidth, conteudo}) => {
    let botao = '<button style="'
    botao += 'font-family:'      + (fontFamily  ?? "Verdana") + ';'
    botao += 'padding:'          + (padding     ?? "0.5rem 1rem") + ';'
    botao += 'background-color:' + (bgColor     ?? "blue") + ';'
    botao += 'color:'            + (textColor   ?? "white") + ';'
    botao += 'font-weight:'      + (fontWeight  ?? "bold") + ';'
    botao += 'border-radius:'    + (radius      ?? "5%") + ';'
    botao += 'border-width:'     + (borderWidth ?? "0px") + ';'
    botao += '"> '               + (conteudo    ?? "Clique aqui") + ' </button>'

    console.log(botao)
}

//dessa forma temos valores default para todas as propriedades e podemos alterar somente a que desejarmos
//criarBotaoHtml({bgColor: "yellow"})

//Outra forma de alcançar o mesmo resultado é utilizar os parâmetros "default" no objeto desestruturado
criarBotaoHtml = ({
    fontFamily = "Verdana", 
    padding = "0.5rem 1rem", 
    bgColor = "blue", 
    textColor = "white",
    fontWeight = "bold", 
    radius = "5%", 
    borderWidth = "0px", 
    conteudo = "Clique aqui"
}) => {
    let botao = '<button style="'
    botao += 'font-family:' + fontFamily + ';'
    botao += 'padding:' + padding + ';'
    botao += 'background-color:' + bgColor + ';'
    botao += 'color:' + textColor + ';'
    botao += 'font-weight:' + fontWeight + ';'
    botao += 'border-radius:' + radius + ';'
    botao += 'border-width:' + borderWidth + ';'
    botao += '"> ' + conteudo + ' </button>'

    console.log(botao)
}
//criarBotaoHtml({bgColor: "green"})

`

export default {
    title: '3: Destruturação, operador rest e Nullish coalescing',
    size: 1550,
    content
}