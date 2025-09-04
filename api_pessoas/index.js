const express = require("express");

const app = express();

app.use(express.json());

const pessoas = [
    { id: 1, nome: "Guilherme", telefone: "465999756350" }
];

var contador = 1;

//CONSULTAR TODOS AS PESSOAS
app.get("/pessoas", (request, response) => {
    return response.send(pessoas);
});

//CADASTRAR NOVAS PESSOAS
app.post("/pessoas", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;
    const status = request.body.status;

    contador++;

    pessoas.push({
        id: contador,
        nome,
        telefone,
        status
    });

    return response.send(pessoas);
});

//FILTRA PESSOA PELO ID 
app.get("/pessoas/:id", (request, response) => {
    const id = request.params.id;

    const pessoa = pessoas.filter(i => i.id == id);

    if (pessoa.length <= 0) {
        return response.send({
            mensagem: "Nenhuma pessoa encontrada com esse id!"
        });
    }

    return response.send(pessoa);
});

//ATUALIZAR UMA PESSOA JÁ EXISTENTE
app.put("/pessoas", (request, response) => {

    const { id, nome, telefone, status } = request.body;

    if (id == undefined) {
        return response.send({
            mensagem:
                "O campo id é obrigatorio no corpo da requisição!"
        });
    }

    const pessoa = pessoas.filter(item => item.id == id);

    if (pessoa.length <= 0) {
        return response.send({ mensagem: "Código da pessoa inválido!" });
    }

    pessoa[0].nome = nome;
    pessoa[0].telefone = telefone;
    pessoa[0].status = status;

    return response.send(pessoa);

});

//DELETAR UMA PESSOA JÁ EXISTENTE
app.delete("/pessoas/:id", (request, response) => {

    const { id } = request.params;

    const indexPessoas = pessoas.findIndex(i => i.id == id);

    if (indexPessoas > -1) {
        pessoas.splice(indexPessoas, 1);
        return response.send({ mensagem: "Pessoa deletada com sucesso!" });
    } else {
        return response.send({ mensagem: "Ocódigo da pessoa não existe!˜" });
    }

});

app.listen(8080, () => {
    console.log("o servidor está rodando na porta 8080.");
});