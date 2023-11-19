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
    /* async getList(req, res) {
        db.Receita.findAll()
            .then(receitas => {
                res.render('receita / receitaList ',
                    { receitas: receits.map(receita => receita.toJSON()) })
            }).catch((err) => { console.log(err) });
    },
    async getUpdate(req, res) {
        var categorias = await db.Categoria.findAll()
        await db.Receita.findByPk(req.params.id)
            .then(
                receita => res.render('receita / receitaUpdate ', {
                    receita: receita.dataValues,
                    categorias: categorias.map(catg => catg.toJSON())
                })
            ).catch(function (err) { console.log(err) })
    },
    async postUpdate(req, res) {
        await db.Receita.update(req.body, { where: { id: req.body.id } })
            .then(res.render('home ')
            ).catch(function (err) { console.log(err) })
    },
    async getDelete(req, res) {
        await db.Receita.destroy({ where: { id: req.params.id } })
            .then(res.render('home ')
            )
            .catch(err => { console.log(err) })
    } */

}










