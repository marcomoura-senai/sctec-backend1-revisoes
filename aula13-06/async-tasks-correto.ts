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

  await Promise.all(taskPromises);
  console.timeEnd("cronometro");
}

main();
