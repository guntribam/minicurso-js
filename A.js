const content = 
`//Arrow function é uma forma simplificada de escrever uma função
//Observe a função anônima à seguir que retorna o quadrado do parâmetro informado
const minhaFuncaoAnonima = function(x){
    return x * x
}

//equivale à escrita, utilizando lambda

x => x * x

// Agora uma função não anônima

function quadrado(x){
    return x * x
}

//você deve armazenar a função lambda em uma variável

const quadradoLambda = x => x * x

console.log(quadradoLambda(3)) 

//Caso você tenha mais de um parâmetro você deve usar parênteses

const soma = (x, y) => x + y

//Como fica caso precise de algo além do retorno
//a seguir uma função para calcular o volume, com altura fixa em 2
const volume = (comprimento, largura) => {
    const altura = 2
    return comprimento * largura * altura
}

//console.log(volume(3,4))
`

export default {
    title: "1: Lambda",
    size: 1050,
    content
}