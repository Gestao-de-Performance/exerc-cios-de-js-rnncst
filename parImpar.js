const parImpar = (jogador1, jogador2) => {
  let somaValoresJogo = 0;
  somaValoresJogo = jogador1 + jogador2;
  if (somaValoresJogo % 2 === 0) {
    console.log("O resultado é par e o valor total é: ", somaValoresJogo);
  
  } else {
      console.log("O resultado é ímpar e o valor é: " , somaValoresJogo);
    }
  }

  parImpar(4, 2);