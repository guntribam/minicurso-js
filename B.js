const content = 
`
//Considere a seguinte função que soma dois números
let soma = (x, y) => x + y

console.log(soma(1,7))
//O resultado é 8

//O que acontece se o usuário esquecer de passar o 2º parâmetro?

//console.log(soma(1))
//NaN 

//Podemos fixar um valor default para "y" caso o usuário esqueça
soma = (x, y = 3) => x + y

//console.log(soma(1))
//4

//Considere a seguinte função para criar um botão

let criarBotaoHtml = (fontFamily, padding, bgColor, textColor, fontWeight, radius, borderWidth, conteudo) => {
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

//Caso eu queira invocar a função, olhe como fica
//criarBotaoHtml("Verdana", "0.5rem 1rem", "blue", "white", "bold", "5%", "0px", "Clique em mim");

//Olha o que acontece caso eu esqueça a  do primeiro parâmetro
//criarBotaoHtml("0.5rem 1rem", "blue", "white", "bold", "5%", "0px", "Clique em mim");

//Não só fica bem complicado manter essa função, como temos uma complexidade desnecessária
//Neste caso podemos adotar valores "default" para nossa função, olhe como fica
criarBotaoHtml = (
    fontFamily = "Verdana", 
    padding = "0.5rem 1rem", 
    bgColor = "blue", 
    textColor = "white",
    fontWeight = "bold", 
    radius = "5%", 
    borderWidth = "0px", 
    conteudo = "Clique aqui"
) => {
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

//criarBotaoHtml()

//Desta forma passamos apenas aquilo que queremos mudar, pois temos valores "default" para nossas propriedades
//O problema é ainda temos que tomar cuidado com a ordem
//Não conseguimos passar o "conteudo" do botão sem passar todos os parâmetros anteriores

//criarBotaoHtml(undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Cliquem aqui nesse botao")

`

export default {
    title: '2: Parâmetros "default" ou opcionais',
    size: 2250,
    content
}