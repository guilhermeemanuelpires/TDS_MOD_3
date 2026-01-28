const express = require("express");
const knex = require("knex");

const db = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "ESCOLA"
    }
});

const app = express();

app.use(express.json());

app.get("/buscar", async (request, response) => {

    const data = await db("ALUNOS").select();

    response.send(data);
});

app.post("/cadastrar", async (request, response) => {
    const { nome, ra } = request.body;

    const data = await db("ALUNOS").insert({ nome, ra });

    if (data.length > 0) {
        response.send({ msg: "Aluno cadastrado com sucesso!" });
    } else {
        response.send({ msg: "Erro ao cadastrar um novo aluno!" });
    }

});

app.put("/atualizar", (request, response) => {
    response.send("Atualizar")
});

app.delete("/deletar", (request, response) => {
    response.send("deletar!")
});


app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});