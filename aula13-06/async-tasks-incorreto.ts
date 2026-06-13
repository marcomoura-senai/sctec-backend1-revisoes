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

function main() {
  console.log("Inicializando verificação de sites");

  console.time('cronometro')
  sitesParaVerificar.forEach((site, i) => {
    console.log(`Verificando ${site}: posição ${i + 1}`);
    isSiteUp(site).then((isUp) => {
      console.log(`${site} está ${isUp ? "UP" : "DOWN"}. Posição ${i + 1}`);
    });
  });
  
  console.log("Verificação de sites finalizada");

  console.timeEnd('cronometro') // Cronometro incorreto pois não aguarda o final das tasks para mostrar o tempo
}

main()

