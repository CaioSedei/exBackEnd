export function somar(num1, num2) {
    const num1Inteiro = num1*100
    const num2Inteiro = num2*100
    const result = num1Inteiro + num2Inteiro
    return result/100

    // return num1 + num2; antes da tratativa de casas decimais
}

export function salario(valorHr, qtdeHr) {
    return valorHr * qtdeHr;
}