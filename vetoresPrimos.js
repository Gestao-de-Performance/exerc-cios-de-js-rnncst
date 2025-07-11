const readline = require('readline');

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let contador = 0;

// Função que verifica se um número é primo
function ehPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;7
}

// Função que pede os números ao usuário
function pedirNumero() {
  rl.question(`Digite o ${contador + 1}º número: `, function(resposta) {
    const numero = parseFloat(resposta);

    // Validação básica
    if (isNaN(numero)) {
      console.log("Por favor, digite um número válido.");
      pedirNumero(); // Tenta novamente
    } else {
      numeros.push(numero);
      contador++;

      if (contador < 10) {
        pedirNumero(); // Continua pedindo até ter 10 números
      } else {
        // 1º Exercício: Média dos números
        let soma = 0;
        for (let i = 0; i < numeros.length; i++) {
          soma += numeros[i];
        }
        const media = soma / numeros.length;
        console.log("\nA média dos valores digitados é:", media);

        // 2º Exercício: Números primos
        console.log("\nNúmeros primos digitados:");
        let encontrouPrimo = false;
        for (let i = 0; i < numeros.length; i++) {
          if (ehPrimo(numeros[i])) {
            console.log(numeros[i]);
            encontrouPrimo = true;
          }
        }

        if (!encontrouPrimo) {
          console.log("Nenhum número primo foi digitado.");
        }

        rl.close();
      }
    }
  });
}

// Inicia o programa
console.log("Digite 10 números para calcular a média e encontrar os primos:");
pedirNumero();
