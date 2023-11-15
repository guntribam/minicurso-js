const content = 
`//Considere o seguinte array
let pessoas = [{nome: "Gunter"}, {nome: "Juliana"}, {nome: "Dante"}]
console.log(pessoas)

//Como fazer para obter um arrays de strings(com os nomes) ao invés de arrays de objetos que têm o nome?
//Podemos utilizar uma função contida em todos os arrays: map
//O map recebe uma função como parâmetro. Essa função será chamada para cada valor contido no array.
//Portanto você poderá transformar um valor em outro

const nomes = pessoas.map(pessoa => pessoa.nome)
//console.log(nomes)

//para cada item do array estamos retornando o nome contido no objeto, ou seja
//para cada item do array realizamos uma substituição do objeto pelo nome contido no objeto
//Essencialmente o .map é uma função que retorna um novo array com cada campo transformado

const novoArray = [1,2,3].map(campo => "Gunter")

//console.log(novoArray)

//Além do .map temos o .filter que é utilizado de forma semelhante ao .map, porém com a finalidade de 
//filtrar elementos do array

pessoas = [{nome: "Ivo", idade: 29}, {nome: "Eva", idade: 19}, {nome: "Carlos", idade: 58}]
let pessoasAcimaDe20 = pessoas.filter(pessoa => pessoa.idade > 20)

//console.log(pessoasAcimaDe20)

//Por fim temos o .reduce que é utilizado quando queremos transformar o array em uma só coisa
//Imagine que queremos obter a soma, o máximo e o mínimo das idades das pessoas do array a seguir
pessoas = [
    {nome: "Ivo", idade: 29}, 
    {nome: "Eva", idade: 19}, 
    {nome: "Carlos", idade: 58}
]
let soma = pessoas.reduce((acc, el) => acc += el.idade, 0)
let maximo = pessoas.reduce((acc, el) => acc , 0)
let minimo = pessoas.reduce((acc, el) => acc += el.idade, 0)
//console.log(soma)


//Outro uso interessante do reduce é quando queremos transformar um array em um objeto.
//Imagine que queiramos criar um objeto cujas chaves sejam os nomes das pessoas e suas respectivas idades como valores

let novoObjeto = pessoas.reduce((acc, pessoa) => {
    return {...acc, [pessoa.nome]: pessoa.idade}
},{})
//console.log(novoObjeto)

`

export default {
    title: '4: map, filter e reduce',
    size: 1350,
    content
}