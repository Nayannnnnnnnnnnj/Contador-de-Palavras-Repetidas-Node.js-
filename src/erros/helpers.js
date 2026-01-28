const filtraOcorrencias = function (paragrafo) {
  return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
};

export const montaSaidaArquivo = function (listaParavras) {
  let textoFinal = "";
  listaParavras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcorrencias(paragrafo).join(", ");
    textoFinal += `palavras duplicadas no parágrafo  ${indice + 1}: ${duplicadas} \n`;
  });

  return textoFinal;
};
