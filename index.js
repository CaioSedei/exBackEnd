import express from 'express';

const app = express();

app.get('/api/pessoa/:id', (req, res) => {
    //query params
    //inicializa na URL depois do "?"
    //?nome=Caio&idade=19
    //req.query.idade
    //route params
    //inicializa na URL depois da barra "/"
    //localhost:3000/api/pessoa/3
    //req.params.id

    const nome = req.query.nome;
    console.log(req.params);
    res.status(200).send(`Hello, ${nome}`);
    // res.status(200).send(`Hello, World!${req.params.id}`);
});

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
});
