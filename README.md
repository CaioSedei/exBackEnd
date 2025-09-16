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