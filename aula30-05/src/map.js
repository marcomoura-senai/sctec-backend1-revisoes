const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const resultado = lista.map((valorAtual) => {
    return valorAtual + 1
})
console.log(resultado)

// lista -> 0x1 = [1,2,3,4,5,6,7,8,9,10] (ponteiro)
// resultado -> 0x2
// index -> 0x3 <- 0
// listaResultado -> 0x5 <- new Array((0x1).length)
// (IF 0x3 >= (0x1).length) -> SALTO PARA LINHA 18
// valorAtual -> 0x4 <- (0x1)[0x3] -> Lógica do callback do map daqui pra baixo
// (0x5)[0x3] <- 0x4 + 1
// 0x3 <- 0x3 + 1
// GOTO 13-> Lógica do callback do map até a linha de cima
// 0x2 <- 0x5


function exemploMapJs() {
    const listaResultado = new Array(lista.length)
    for (let index = 0; index < lista.length; index++) {
        const valorAtual = lista[index];
        
        listaResultado[index] = valorAtual + 1
    }

    return listaResultado
}

const resultadoEx = exemploMapJs()

console.log(resultadoEx) // Temos o mesmo resultado do .map da linha 8!


function nossoMap(array, callback) {
    const listaResultado = new Array(lista.length)
    for (let index = 0; index < array.length; index++) {
        listaResultado[index] = callback(array[index])
    }

    return listaResultado
}

const resultadoMap = nossoMap(lista, (valorAtual) => {
    return valorAtual + 1
})

console.log(resultadoMap) // Mais uma vez o mesmo resultado do map, dessa vez replicando o comportamento de callback!


// Agora replique o comportamento do forEach e do filter.
// Usando somente FOR e IF (e variáveis auxiliares)
// SEM ELSE ☺️
// Use let só quando extremamente necessário (exemplo: contador do for)
// O comportamento é extremamente semelhante ao do map, inclusive a assinatura da função (parâmetros) serão iguais!
