export const contaPalavras = function (text) {
  const paragrafos = extraiParagrafos(text);
  const contagem = paragrafos.reduce((acc, paragrafo) => {
    if (paragrafo) {
      return [...acc, verificaPalavrasDuplicadas(paragrafo)];
    }
    return acc;
  }, []);

  return contagem;
};

const extraiParagrafos = function (text) {
  return text.toLowerCase().split("\n");
};

function limpaPalavras(palavra) {
  return palavra.replace("/[.,\/#!$%\^&\*;:{}=\-_`~()]/g", "");
}

const verificaPalavrasDuplicadas = function (text) {
  const listaParavras = text.split(" ");
  const resultado = {};

  listaParavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
};
