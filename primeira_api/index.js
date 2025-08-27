const express = require("express");

const app = express();

app.get("/", (request, response) => {

    const { nome } = request.query;

    response.send(`Aooôooba! ${nome} baão? 👍`);

});

app.get("/somaDeDoisValores", (request, response) => {
    const { a, b } = request.query;

    console.log(typeof a);
    console.log(typeof b);

    // response.send(`${a} + ${b} = ${ parseInt(a) + parseInt(b) }`);
    response.send(`${a} + ${b} = ${Number(a) + Number(b)}`);
});

app.get("/subitracaoDeDoisValoes", (request, response) => {

    const { a, b } = request.query;

    response.send(`${a} - ${b} = ${Number(a) - Number(b)}`);
});

app.get("/multiplicacaoDeDoisValoes", (request, response) => {
    const { a, b } = request.query;

    response.send(`${a} x ${b} = ${Number(a) * Number(b)}`);
});

app.get("/divisaoDeDoisValoes", (request, response) => {
    const { a, b } = request.query;

    response.send(`${Number(a).toFixed(2)} / ${b} = ${Number(Number(a) / Number(b)).toFixed(2)}`);
});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080 🚀");
});

// http://localhost:8080/?nome=Guilherme

//http://localhost:8080/somaDeDoisValores/?a=1&b=2

