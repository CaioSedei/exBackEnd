# exBackEnd
// let pode ser alterada
// const não pode ser alterada
// var não é mais utilizada

const numero = 10;
let outroNumero = 20;

console.log("Hello, World!");

const express = require('express'); // Importa o framework Express
const app = express(); // Cria uma instância do aplicativo Express
const port = 3000; // Define a porta em que o servidor vai rodar

// Define uma rota GET para a raiz ('/')
app.get('/', (req, res) => {
  res.send('Hello World!'); // Envia a mensagem 'Hello World!' como resposta
});

// Inicia o servidor na porta definida
app.listen(port, () => {
console.log(`Servidor a rodar em http://localhost:${port}`);
});



//query params
    //inicializa na URL depois do "?"
    //?nome=Caio&idade=19
    //req.query.idade
    //route params
    //inicializa na URL depois da barra "/"
    //localhost:3000/api/pessoa/3
    //req.params.id

erro500 falta == app.use(express.json());






