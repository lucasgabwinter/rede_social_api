const db = require('../config/db_sequelize')

module.exports = {
    async getComentarios(req, res) {
        db.Comentario.findAll().then(comentarios => {
            res.status(200).json(comentarios)
        })
    },

    async getComentarioById(req, res) {
        db.Comentario.findByPk(req.params.id)
            .then((comentario) => {
                if (comentario) {
                    res.status(200).json(comentario);
                } else {
                    res.status(404).json({ 'error': 'Comentário não encontrado' });
                }
            })
    },

    async postComentario(req, res) {
        db.Comentario.create(req.body)
            .then((comentario) => {
                res.status(201).json(comentario)
            })
    },

    async putComentario(req, res) {
        db.Comentario.update(req.body, { where: { id: req.params.id } })
            .then((comentario) => {
                if (comentario > 0) {
                    res.status(200).json(comentario)
                } else {
                    res.status(404).json({ 'error': 'não pode atualizar o comentario' })
                }
            })
    },

    async deleteComentario(req, res) {
        db.Comentario.destroy({ where: { id: req.params.id } })
            .then((comentario) => {
                if (comentario > 0) {
                    res.status(200).send()
                } else {
                    res.status(404).json({ 'error': 'não pode excluor o comentario' })
                }
            })
    }
}