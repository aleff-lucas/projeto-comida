const db = require("../database/database");

function cadastrarPizza(req, res) {
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;

    const inserir = db.prepare(`
        INSERT INTO pizzas (nome, descricao, preco)
        VALUES (?, ?, ?)
    `);

    inserir.run(nome, descricao, preco);

    res.send("Pizza cadastrada com sucesso!");
}

module.exports = { cadastrarPizza };