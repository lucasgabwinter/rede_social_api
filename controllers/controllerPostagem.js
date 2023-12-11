const db = require('../config/db_sequelize')
//const path = require('path');

module.exports = {
    async getPostagemById(req, res) {
        db.Postagem.findOne({
            where: { id: req.params.id }
        })
            .then((postagem) => {
                if (postagem) {
                    res.status(200).json(postagem);
                } else {
                    res.status(404).json({ 'error': 'Postagem não encontrada' });
                }
            })
    },

    async getPostagensByUser(req, res) {
        db.Usuario.findByPk(req.params.usuarioId)
            .then((usuario) => {
                if (!usuario) {
                    res.status(404).json({ 'error': 'Usuário não encontrado' });
                } else {
                    return db.Postagem.findAll({
                        where: { usuarioId: usuario.id },
                    });
                }
            })
            .then(postagens => {
                res.status(200).json(postagens)
            });
    },

    async postPostagem(req, res) {
        db.Usuario.findByPk(req.params.usuarioId)
            .then((usuario) => {
                if (!usuario) {
                    res.status(404).json({ 'error': 'Usuário não encontrado' });
                } else {
                    return db.Postagem.create({
                        ...req.body,
                        usuarioId: usuario.id,
                    });
                }
            })
            .then((postagem) => {
                res.status(201).json(postagem);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ 'error': 'Erro interno do servidor' });
            });
    },

    async putPostagem(req, res) {
        db.Postagem.update(req.body, { where: { id: req.params.id }, returning: true, })
            .then(([rowsUpdated, [updatedPostagem]]) => {
                if (rowsUpdated === 0) {
                    res.status(404).json({ 'error': 'Postagem não encontrada' });
                } else {
                    res.status(200).json(updatedPostagem);
                }
            })
    },

    async deletePostagem(req, res) {
        db.Postagem.destroy({ where: { id: req.params.id } })
            .then((postagem) => {
                if (postagem > 0) {
                    res.status(200).json({ 'concluído': "Postagem deletada com sucesso" });
                } else {
                    res.status(404).json({ 'error': 'Postagem não localizada' })
                }
            })
    },

    async patchPostagem(req, res) {
        try {
            const postId = req.params.id;
            const usuarioId = req.params.usuarioId;

            const postagem = await db.Postagem.findByPk(postId);
            if (!postagem) {
                return res.status(404).json({ erro: 'Postagem não encontrada.' });
            }

            const usuario = await db.Usuario.findByPk(usuarioId);
            if (!usuario) {
                return res.status(404).json({ erro: 'Usuário não encontrado.' });
            }

            // Verifica se o usuário já curtiu a postagem
            const curtidaExistente = await db.Curtida.findOne({
                where: {
                    remetenteId: usuarioId,
                    postagemId: postId,
                },
            });
            if (curtidaExistente) {
                return res.status(400).json({ erro: 'Usuário já curtiu esta postagem.' });
            }

            await db.Curtida.create({
                remetenteId: usuarioId,
                destinatarioId: postagem.usuarioId,
                postagemId: postId,
            });

            await postagem.increment('totalCurtidas');
            return res.status(200).json({ mensagem: 'Curtida adicionada com sucesso.' });
        } catch (erro) {
            return res.status(500).json({ erro: 'Erro interno do servidor.' });
        }
    }
}


