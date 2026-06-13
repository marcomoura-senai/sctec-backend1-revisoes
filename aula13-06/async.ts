

function esperaArtificial(timer: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timer) // Exemplo de algo demora. Não tem nada a ver com a promise. Poderia ser qualquer coisa que iria chamar o resolve
    })
}



async function main() {
    console.log('antes da espera')
    console.time('timer')
    await esperaArtificial(500) // Sempre que tu dá um await, a thread JS vai executar outro código que está pronto
    
    console.log('Depois da espera')
    console.timeEnd('timer')
}

main().catch(console.error)