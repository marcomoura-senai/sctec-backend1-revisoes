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
  let contador = sitesParaVerificar.length;
  return new Promise((resolve, reject) => {
    console.log("Inicializando verificação de sites");

    sitesParaVerificar.forEach((site, i) => {
      console.log(`Verificando ${site}: posição ${i + 1}`); // Verificando google, Facebook,
      isSiteUp(site).then((isUp) => {
        console.log(`${site} está ${isUp ? "UP" : "DOWN"}. Posição ${i + 1}`);
        contador--

        if(contador === 0) {
          resolve(void 0)
        }
      });
    });

    console.log("Verificação de sites finalizada");
  });
}

console.time("cronometro");
main().then(() => {
  console.log("PROMISE DA MAIN RESOLVIDA");
  console.timeEnd("cronometro");
});
