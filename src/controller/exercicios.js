import serviceExercicio from "../service/exercicios.js";

class controllerExercicio {

    //1. Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
    Exercicio1Get (req, res) {
        const num1 = Number(req.query.num1);
        const num2 = Number(req.query.num2);
        const result = serviceExercicio.Somar(num1, num2);
        res.status(200).send({ num1, num2, result })
    }

    Exercicio1Post (req, res) {
        try {
            const num1 = req.body.num1;
            const num2 = req.body.num2;
            const result = serviceExercicio.Somar(num1, num2);
            res.status(200).send({
                msg: `O resultado é ${result}`,
                data: { num1, num2, result },
                error: null
            })
        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: true
            })
        }

    }


    //2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
    Exercicio2 (req, res) {
        const { valorHr, qtdeHr } = req.params;
        const result = serviceExercicio.Salario(valorHr, qtdeHr);
        res.status(200).send({ result: Number(valorHr) * Number(qtdeHr) });
    }
}

export default new controllerExercicio()




