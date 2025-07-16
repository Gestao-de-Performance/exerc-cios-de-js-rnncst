const fibonacci = (n) => {
    if (n === 0) {
        console.log ("O N-ésimo número é 0");
    } else if (n === 1) {
        console.log ("O N-ésimo número é 1");
    } else {
        let = termoAtual = 0;
        let proximoTermo = 1;
        let somaTermos = 0;
        for (let x = 2; x < n; x++) {
            somaTermos = termoAtual + proximoTermo;
            termoAtual = proximoTermo;
            proximoTermo = somaTermos;
        }
        console.log("O N-ésimo número é", proximoTermo);
    }
}

fibonacci(4);