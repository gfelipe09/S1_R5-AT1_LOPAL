let num;
let soma = 0;
let contador = 0;

do {

    num = Number(prompt("Insira um número qualquer: "));

    if (isNaN(num) || num !== 0) {

        soma = soma + num;
        contador++;

    }

} while (num !== 0);

let media = contador ? soma / contador: 0;

alert(`\nQuantidade de Números: ${contador} \nSoma: ${soma} \nMédia: ${media}`);

