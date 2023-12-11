const db = require('../config/db_sequelize')
//const usuario = require('../models/usuario')

module.exports = {
    async getUsuarios(req, res) {
        db.Usuario.findAll().then(usuarios => {
            res.status(200).json(usuarios)
        })
    },

    async getUsuarioByLogin(req, res) {
        db.Usuario.findOne({
            where: { login: req.params.login }
        })
            .then((usuario) => {
                if (usuario) {
                    res.status(200).json(usuario);
                } else {
                    res.status(404).json({ 'error': 'Usuário não encontrado' });
                }
            })
    },

    async postUsuario(req, res) {
        db.Usuario.create(req.body)
            .then((usuario) => {
                res.status(201).json(usuario)
            })
    },

    async putUsuario(req, res) {
        db.Usuario.update(req.body, { where: { id: req.params.id }, returning: true, })
            .then(([rowsUpdated, [updatedUsuario]]) => {
                if (rowsUpdated === 0) {
                    res.status(404).json({ 'error': 'Usuario não encontrado' });
                } else {
                    res.status(200).json(updatedUsuario);
                }
            })
    },

    async deleteUsuario(req, res) {
        db.Usuario.destroy({ where: { login: req.params.login } })
            .then((usuario) => {
                if (usuario > 0) {
                    res.status(200).json({ "concluído": 'Usuário excluido com sucesso' });
                } else {
                    res.status(404).json({ 'error': 'não pode excluir o usuario' })
                }
            })
    }
}