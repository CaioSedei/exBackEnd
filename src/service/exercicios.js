class serviceExercicio {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar apenas números");
        }
        const num1Inteiro = num1 * 100
        const num2Inteiro = num2 * 100
        const result = num1Inteiro + num2Inteiro
        return result / 100

        // return num1 + num2; antes da tratativa de casas decimais
    }

    Salario(valorHr, qtdeHr) {
        return valorHr * qtdeHr;
    }
}

export default new serviceExercicio()