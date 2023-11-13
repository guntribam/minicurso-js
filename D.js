const content = 
`//Considere o seguinte array
const pessoas = [{nome: "Gunter"}, {nome: "Juliana"}, {nome: "Dante"}]
console.log(pessoas)

//Como fazer para obter um arrays de strings(com os nomes) ao invés de arrays de objetos que têm o nome?
//Podemos utilizar uma função contida em todos os arrays: map
//O map recebe uma função como parâmetro. Essa função será chamada para cada valor contido no array.
//Portanto você poderá transformar um valor em outro

const nomes = pessoas.map(pessoa => pessoa.nome)
console.log(nomes)

//para cada item do array estamos retornando o nome contido no objeto, ou seja
//para cada item do array realizamos uma substituição do objeto pelo nome contido no objeto



`

export default {
    title: '4: map, filter e reduce',
    size: 350,
    content
}