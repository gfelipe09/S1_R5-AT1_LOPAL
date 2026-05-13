let repeticoes;

do {

    repeticoes = Number(prompt("Insira uma das opções para continuar: [1]  para Inserir produto, [2] para Listar produto ou [3] para Sair. "));

} while (isNaN(repeticoes) || repeticoes != 3)

if (repeticoes == 3) {

alert("Sistema encerrado")

};