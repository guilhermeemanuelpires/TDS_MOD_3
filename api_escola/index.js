const express = require("express");
const knex = require("knex");

const db = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "123456",
        database: "ESCOLA"
    }
});

const app = express();

app.use(express.json());

app.get("/buscar", async (request, response) => {

    const { id } = request.query;

    var data = [];

    try {
        if (id) {
            data = await db('ALUNOS').select().where({ id });
        } else {
            data = await db('ALUNOS').select();
        }

        response.send(data);

    } catch (error) {
        console.log(error);
        response.status(500).send({ msg: "Ops, erro inesperado!" });
    }

});

app.post("/cadastrar", async (request, response) => {
    const { nome, ra } = request.body;

    const data = await db("ALUNOS").insert({ nome, ra });

    if (data.length > 0) {
        response.send({ msg: "Aluno cadastrado com sucesso!" });
    } else {
        response.status(500).send({ msg: "Erro ao cadastrar um novo aluno!" });
    }

});

app.put("/atualizar/:id", async (request, response) => {
    const { id } = request.params;
    const { nome, ra, status } = request.body;

    if (!Number.isInteger(Number(id))) {
        response.status(300).send({ msg: "O parametro id deve ser apenas números" });
    }

    const data = await db('ALUNOS').update({
        nome,
        ra,
        status
    }).where({ id });

    if (data == 1) {
        response.send({ msg: "O Aluno foi atualziado com sucesso!" });
    } else {
        response.status(400).send({ msg: "O ID do aluno está inválido!" });
    }

});

app.delete("/deletar/:id", async (request, response) => {
    const { id } = request.params;

    if (!Number.isInteger(Number(id))) {
        response.status(300).send({ msg: "O parametro id deve ser apenas números!" });
    }

    const data = await db('ALUNOS').del().where({ id });

    if (data == 1) {
        response.send({ msg: "O aluno foi deletado com sucesso!" });
    } else {
        response.status(400).send({ msg: "O id do aluno está inválido!" })
    }
});


app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});