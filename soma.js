// Importa o módulo readline para ler dados do teclado
const readline = require('readline');

// Cria a interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pede o primeiro número
rl.question('Digite o primeiro número: ', function(num1) {
  // Pede o segundo número
  rl.question('Digite o segundo número: ', function(num2) {
    // Converte para número e calcula a soma
    const soma = parseFloat(num1) + parseFloat(num2);

    // Exibe o resultado no console
    console.log('A soma dos dois números é:', soma);

    // Fecha a interface de leitura
    rl.close();
  });
});
