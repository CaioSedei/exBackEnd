import express from 'express';
const app = express();
app.use(express.json());
import {
    exercicio1Get,
    exercicio1Post,
    exercicio2
} from './controller/exercicios.js';


app.get('/api/pessoa/:id', (req, res) => {


    const nome = req.query.nome;
    console.log(req.params);
    res.status(200).send(`Hello, ${nome}`);
    // res.status(200).send(`Hello, World!${req.params.id}`);
});

app.get('/exercicio1', exercicio1Get)
app.post('/exercicio1', exercicio1Post)

app.get('/exercicio2/:valorHr/:qtdeHr', exercicio2)




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

