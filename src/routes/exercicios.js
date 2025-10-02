import express from 'express'
import controllerExercicio from '../controller/exercicios.js'

const router = express.Router()

// app.get('/api/pessoa/:id', (req, res) => {


//     const nome = req.query.nome;
//     console.log(req.params);
//     res.status(200).send(`Hello, ${nome}`);
//     // res.status(200).send(`Hello, World!${req.params.id}`);
// });

router.get('/exercicio1', controllerExercicio.Exercicio1Get)
router.post('/exercicio1', controllerExercicio.Exercicio1Post)

router.get('/exercicio2/:valorHr/:qtdeHr', controllerExercicio.Exercicio2)

export default router