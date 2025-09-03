# 📘 Guia Didático: Node.js e NPM

Seja bem-vindo(a)!
Este guia vai te ajudar a dar os **primeiros passos com Node.js** e entender como usar o **NPM (Node Package Manager)** para gerenciar seus projetos.

---

## O que é o Node.js?

O **Node.js** é um ambiente que permite executar **JavaScript fora do navegador**.  
Com ele, você pode criar **aplicações web, servidores e ferramentas**.

---

## Executando um Arquivo com Node.js

Sempre que você quiser rodar um arquivo `.js`, use o comando:

```bash
node nome_do_arquivo.js
```

Exemplo prático:

```bash
node index.js
```

Isso vai executar o arquivo `index.js`.

---

## O que é o NPM?

O **NPM** é o **gerenciador de pacotes** do Node.js.  
Ele serve para:

- Instalar bibliotecas externas (como o **Express**).
- Criar o arquivo `package.json`, que organiza as informações do projeto.
- Gerenciar versões e dependências.

---

## Criando um Novo Projeto

1. Abra o terminal dentro da pasta do seu projeto.
2. Digite:

```bash
npm init -y
```

Isso cria o arquivo `package.json`, que vai ser o "manual de instruções" do seu projeto.

---

## Instalando Bibliotecas

Para instalar uma biblioteca, use:

```bash
npm install nome_da_biblioteca
```

Exemplo:

```bash
npm install express
```

Isso cria a pasta **node_modules/** e adiciona a biblioteca no `package.json`.

---

## Instalando Todas as Dependências

Se você baixou um projeto pronto (que já tem `package.json`), basta rodar:

```bash
npm install
```

Esse comando lê o `package.json` e instala tudo que o projeto precisa.

---

## Scripts no `package.json`

Você pode criar **atalhos de comandos** dentro do `package.json`.  
Isso é muito útil para não precisar digitar sempre o mesmo comando.

Exemplo de configuração:

```json
{
  "scripts": {
    "start": "node --watch index.js"
  }
}
```

O que acontece aqui?  
- `start` é o **nome do script**.  
- `node --watch index.js` é o **comando que será executado**.  
- O `--watch` faz com que o Node.js reinicie automaticamente toda vez que você salvar o arquivo (`Ctrl + S`).

---

## Rodando um Script

Depois de criar um script, você pode rodar assim:

```bash
npm start
```

Isso vai executar o que você configurou no `package.json`.  
No exemplo acima, ele rodaria o `index.js` com **auto-reload**.

---

## Resumindo

- **node arquivo.js** → roda um arquivo específico.  
- **npm init -y** → cria o `package.json`.  
- **npm install express** → instala uma biblioteca.  
- **npm install** → instala todas as bibliotecas listadas no projeto.  
- **npm start** → executa o script configurado no `package.json`.