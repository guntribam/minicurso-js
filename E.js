const content = 
`//forEach
let numeros = [1, 2, 3, 3, 2, 1];
numeros.forEach(num => console.log(num));

//join
const elementos = ['Fogo', 'Ar', 'Água'];
//console.log(elementos.join())

//concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
//console.log(array1.concat(array2))

//indexOf
const frutas = ['maçã', 'banana', 'manga'];
//console.log(frutas.indexOf('manga'))

//lastIndexOf
//console.log(numeros.lastIndexOf(2))

//find
//console.log(elementos.find(elemento => elemento[elemento.length - 1] === 'a'))

//some
//console.log(elementos.some(elemento => elemento[elemento.length - 1] === 'a'))

//every
//console.log(elementos.every(elemento => elemento[elemento.length - 1] === 'a'))

//includes
//console.log(frutas.includes('banana'))

//sort
const economias = [
    {pais: 'China', posicao: 2},
    {pais: 'Japão', posicao: 4},
    {pais: 'Alemanha', posicao: 3},
    {pais: 'EUA', posicao: 1}, 
    {pais: 'Índia', posicao: 5}
]
numeros = [4,1,8,5,3,9]

//console.log(numeros.sort())
//console.log(frutas.sort())
//console.log(economias.sort((a, b) => a.posicao - b.posicao))
`

export default {
    title: '5: Apêndice - outros métodos do array',
    size: 1350,
    content
}