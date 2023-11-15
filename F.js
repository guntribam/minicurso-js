const content = 
`
const empresas = [
    { nome: "Dinâmica Finanças", categoria: "Finanças", inicio: 1981, fim: 2012, valorMercado: 500_000_000 },
    { nome: "Varejo Total", categoria: "Varejo", inicio: 1992, fim: 2008, valorMercado: 300_000_000 },
    { nome: "AutoInova", categoria: "Automotivo", inicio: 1999, fim: 2007, valorMercado: 450_000_000 },
    { nome: "Casa & Compras", categoria: "Varejo", inicio: 1989, fim: 2011, valorMercado: 600_000_000 },
    { nome: "TechFront", categoria: "Tecnologia", inicio: 2009, fim: 2014, valorMercado: 800_000_000 },
    { nome: "Capital Seguro", categoria: "Finanças", inicio: 1987, fim: 2010, valorMercado: 550_000_000 },
    { nome: "Rodas do Futuro", categoria: "Automotivo", inicio: 1986, fim: 1996, valorMercado: 200_000_000 },
    { nome: "InovaTech", categoria: "Tecnologia", inicio: 2011, fim: 2016, valorMercado: 900_000_000 },
    { nome: "Estilo Varejo", categoria: "Varejo", inicio: 1981, fim: 2020, valorMercado: 250_000_000 }
];

// Exercício 1: Imprima o nome de cada empresa usando forEach

// Exercício 2: Imprima o nome de cada empresa iniciada após 1987

// Exercício 3: Imprima apenas as empresas da categoria "Varejo

// Exercício 4: Classifique as empresas com base na data de término em ordem crescente

// Exercício 5: Mostre qual a média do valor de mercado das empresas, a empresa com maior e menor valor

// Exercício 6: Transforme o array de empresas em um objeto que tenha como chave o nome da empresa
// e o valor seu respectivo valorMercado

//Exercício 7: Obtenha apenas os nomes das empresas iniciadas antes de 2000 e finalizadas depois de 2010
//ordenadas pelo valor de mercado em ordem crescente

`

export default {
    title: '6: Exercícios',
    size: 1050,
    content
}