const db = require('../config/db_sequelize')
const path = require('path');

module.exports = {
    async getPostagens(req, res) {
        db.Postagem.findAll().then(postagens => {
            res.status(200).json(postagens)
        })
    },

    async postPostagem(req, res) {
        db.Postagem.create(req.body)
            .then((postagem) => {
                res.status(201).json(postagem)
            })
    },

    async putPostagem(req, res) {
        db.Postagem.update(req.body, { where: { id: req.params.id } })
            .then((postagem) => {
                if (postagem > 0) {
                    res.status(200).json(postagem)
                } else {
                    res.status(404).json({ 'error': 'não pode atualizar a postagem' })
                }
            })
    },

    async deletePostagem(req, res) {
        db.Postagem.destroy({ where: { id: req.params.id } })
            .then((postagem) => {
                if (postagem > 0) {
                    res.status(204).send(); // No content
                } else {
                    res.status(404).json({ 'error': 'não pode excluir a postagem' })
                    console.error();
                }
            })
    }


}







