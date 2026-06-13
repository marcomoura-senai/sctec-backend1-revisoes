export async function isSiteUp(site: string): Promise<boolean> {
  const resposta = await fetch(site);
  if (resposta.ok) {
    return true;
  }

  return false;
}

const sitesParaVerificar = [
  "https://www.google.com",
  "https://www.google.com.br",
  "https://www.facebook.com",
  "https://www.youtube.com",
  "https://www.twitter.com",
  "https://www.instagram.com",
  "https://www.linkedin.com",
];

async function main() {
  console.log("Inicializando verificação de sites");

  console.time("cronometro");

  const taskPromises = sitesParaVerificar.map(async (site, i) => {
    console.log(`Verificando ${site}. Posição ${i}`);
    const isUp = await isSiteUp(site);
    console.log(`${site} está ${isUp ? "UP" : "DOWN"}. Posição ${i}`);
  });

  //  Esse código é igual ao código acima, porém o uso de "thens" encadeados é desencorajado. O await é mais limpo e legível. A própria IDE já vai dizer que você poderia converter esse código no código acima, e vai fazer automaticamente para você
  //   const taskPromises = sitesParaVerificar.map((site, i) => {
  //     console.log(`Verificando ${site}. Posição ${i}`);
  //     return isSiteUp(site).then((isUp) => {
  //       console.log(`${site} está ${isUp ? "UP" : "DOWN"}. Posição ${i}`);
  //     });
  //   });

  await Promise.all(taskPromises); // Pede para aguardar todas finalizarem
  console.timeEnd("cronometro"); // Cronometro correto, a função aguardou todas as tasks e não perdeu tempo esperando uma enquanto poderia executar outra que já acabou

  // Deve dar diferença de segundos entre o código completamente assíncrono e o bloqueante. E isso com poucas tarefas. Em arrays grandes a diferença é imensa e você nunca deve fazer de forma bloqueante o que pode ser assíncrono

  // O tempo exato de cada execução depende do computador. No meu foi:
  // Código bloqueante (async-tasks-incorreto-2.ts): 2.445s
  // Código assíncrono (async-tasks-correto.ts): 737.469ms
  // Diferença de quase dois segundos em só 7 entradas! Para um servidor de produção, dois segundos é MUITA COISA
}

main();
