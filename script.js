let num = Number(prompt("Insira um número: "));
let ResFinal = "";

for (let i = 1; i <= 10; i++) {
    let calculo = num * i

    ResFinal += `${num} * ${i} = ${calculo}\n`
}

alert(`A tabuada do ${num} é: \n${ResFinal}`);