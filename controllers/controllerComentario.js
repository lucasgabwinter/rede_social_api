const db = require('../config/db_sequelize')

module.exports = {
    async getComentariosByPostagem(req, res) {
        db.Postagem.findByPk(req.params.postagemId)
            .then((postagem) => {
                if (!postagem) {
                    res.status(404).json({ 'error': 'Postagem não encontrada' });
                } else {
                    return db.Comentario.findAll({
                        where: { postagemId: postagem.id },
                    });
                }
            })
            .then(comentarios => {
                res.status(200).json(comentarios)
            });
    },

    async getComentarioById(req, res) {
        db.Comentario.findOne({
            where: { id: req.params.id }
        })
            .then((comentario) => {
                if (comentario) {
                    res.status(200).json(comentario);
                } else {
                    res.status(404).json({ 'error': 'Comentário não encontrado' });
                }
            })
    },

    async postComentario(req, res) {
        db.Postagem.findByPk(req.params.postagemId)
            .then((postagem) => {
                if (!postagem) {
                    res.status(404).json({ 'error': 'Postagem não encontrada' });
                } else {
                    return db.Comentario.create({
                        ...req.body,
                        postagemId: postagem.id,
                    });
                }
            })
            .then((comentario) => {
                res.status(201).json(comentario);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ 'error': 'Erro interno do servidor' });
            });
    },

    async putComentario(req, res) {
        db.Comentario.update(req.body, { where: { id: req.params.id }, returning: true, })
            .then(([rowsUpdated, [updatedComentario]]) => {
                if (rowsUpdated === 0) {
                    res.status(404).json({ 'error': 'Comentário não encontrado' });
                } else {
                    res.status(200).json(updatedComentario);
                }
            })
    },

    async deleteComentario(req, res) {
        db.Comentario.destroy({ where: { id: req.params.id } })
            .then((comentario) => {
                if (comentario > 0) {
                    res.status(200).json({ 'concluído': "Comentário deletado com sucesso" });
                } else {
                    res.status(404).json({ 'error': 'Comentário não localizado' })
                }
            })
    }

}