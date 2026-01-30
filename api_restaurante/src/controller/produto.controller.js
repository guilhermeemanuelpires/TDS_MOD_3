import mysqlConn from "../db/mysql.conn.js";

export default {
    cadastrar: (req, res) => {
        res.send("Cadastrar");
    },
    consultar: async (req, res) => {

        const data = await mysqlConn("PRODUTOS").select();
        
        res.send(data);
    },
    atualizar: (req, res) => {
        res.send("atualizar");
    },
    deletar: (req, res) => {
        res.send("deletar");
    }
}