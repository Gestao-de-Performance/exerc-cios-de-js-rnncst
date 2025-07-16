function fibonacci(n) {
  if (n <= 0) {
    return "Digite um número positivo";
  }
  
  if (n === 1) {
    
    // primeiro termo é 0
    return 0; 
  }
  
  if (n === 2) {
    
    // segundo termo é 1
    return 1; 
  }
  
  // primeiro termo
  let a = 0;
  
  // segundo termo 
  let b = 1; 
  let resultado = 0;
  
  for (let i = 3; i <= n; i++) {
    resultado = a + b;
    a = b;
    b = resultado;
  }
  
  return resultado;
}

// Testando

// 0
console.log(fibonacci(1));

// 1
console.log(fibonacci(2));

// 8
console.log(fibonacci(7));