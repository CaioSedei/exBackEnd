//1. Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
export const exercicio1 = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const result = num1 + num2;
    res.status(200).send({ num1, num2, result })
}


//2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
export const exercicio2 = (req, res) => {
    const { valorHr, qtdeHr } = req.params;
    res.status(200).send({ result: Number(valorHr) * Number(qtdeHr) });
}


//3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
export const exercicio3 = (req, res) => {
    const { p1, p2, p3, p4, p5 } = req.params;
    const media = (Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5)) / 5;
    res.status(200).send({ result: media });
}


//4. Peça uma temperatura em graus Celsius, transforme e mostre em graus Fahrenheit. F = (9*C + 160) / 5
export const exercicio4 = (req, res) => {
    const c = Number(req.query.c);
    const f = (9 * c + 160) / 5;
    res.status(200).send({ conversao: f });
}