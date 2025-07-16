// Pegando o nome dos jogadores
let jogador1 = prompt("Nome do Jogador 1:");
let jogador2 = prompt("Nome do Jogador 2:");

// Jogador 1 escolhe Par ou Ímpar
let escolha1 = prompt(`${jogador1}, você quer PAR ou ÍMPAR?`).toLowerCase();

// Validação da escolha
while (escolha1 !== "par" && escolha1 !== "ímpar") {
  escolha1 = prompt("Escolha inválida. Digite PAR ou ÍMPAR:").toLowerCase();
}

// Se jogador1 escolheu par, jogador2 fica com ímpar, e vice-versa
let escolha2 = escolha1 === "par" ? "ímpar" : "par";

alert(`${jogador2}, você será ${escolha2.toUpperCase()}.`);

// Jogadores escolhem seus números
let numero1 = parseInt(prompt(`${jogador1}, escolha um número entre 0 e 10:`));
while (isNaN(numero1) || numero1 < 0 || numero1 > 10) {
  numero1 = parseInt(prompt("Número inválido. Escolha um número entre 0 e 10:"));
}

let numero2 = parseInt(prompt(`${jogador2}, escolha um número entre 0 e 10:`));
while (isNaN(numero2) || numero2 < 0 || numero2 > 10) {
  numero2 = parseInt(prompt("Número inválido. Escolha um número entre 0 e 10:"));
}

// Soma dos dois números
let soma = numero1 + numero2;

// Verificando se é par
let deuPar = soma % 2 === 0;

console.log(`\n===== RESULTADO =====`);
console.log(`${jogador1} escolheu: ${numero1}`);
console.log(`${jogador2} escolheu: ${numero2}`);
console.log(`Soma: ${soma} → ${deuPar ? "PAR" : "ÍMPAR"}`);

// Verificando quem ganhou
if ((deuPar && escolha1 === "par") || (!deuPar && escolha1 === "ímpar")) {
  console.log(` ${jogador1} venceu!`);
} else {
  console.log(` ${jogador2} venceu!`);
}
