let soma = 0;
let historico = ""

for (let i = 1; i <= 10; i++){
    soma += i;

    historico += `Somando ${i}: Total parcial = ${soma}\n`;
}
alert(`${historico}\n`);
