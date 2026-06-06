// PROBLEMA: Dada uma frase conte quantas vezes uma palavra aparece

// 1. Decidir entrada e saída = ENTRADA É : UMA FRASE; SAÍDA É : QUANTAS VEZES A PALAVRA APARECE
// 2. ENTRADA: STRING
// 3. SAÍDA: A PALAVRA E O NÚMERO DE VEZES => {string: number}
/**
 * 4. Verificar palavra por palavra da frase
 *    Verificar se a palavra já apareceu, se apareceu soma +1
 */
// 5. Criar código
// 6. Rastrear

// ser ou não ser eis a questão

function wordCount(sentence: string): Record<string, number> {

    const words = sentence.split(" ")

    const contador: Record<string, number> = {

    }

    for (const word of words) {
        if(word in contador) {
            contador[word] = contador[word] + 1
            continue; // Essa iteração do for acaba aqui, próximo
        } 

        contador[word] = 1
    }

    return contador
}

console.log(wordCount("ser ou não ser eis a questão"))

function wordCountSpecific(sentence: string, word: string): number {
    const allWordsCount = wordCount(sentence)

    if(allWordsCount[word]) {
       return allWordsCount[word] 
    }

    return 0
}

console.log(wordCountSpecific("ser ou não ser eis a questão", "paralelepipedo"))
console.log(wordCountSpecific("ser ou não ser eis a questão", "ser"))
