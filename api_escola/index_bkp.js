const express = require("express");
const knex = require("knex");

const conexao = knex({
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        
        password: "",
        database: "ESCOLA"
    }
});

const app = express();

app.use(express.json())

app.post("/cadastro", async (req, res) => {
    const { nome, ra, status } = req.body;

    const data = await conexao.insert({ nome, ra, status }).into("ALUNOS")

    if (data.length > 0) {
        res.send({ msg: "Aluno cadastrado com sucesso!" });
    }

});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});

/**
 *  http://localhost:8080
 * 
 * **/
