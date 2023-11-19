const Sequelize = require('sequelize');
const sequelize = new Sequelize('web2_db', 'postgres', 'root',
        {host: 'localhost', dialect: 'postgres'});

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/usuario.js')
        (sequelize, Sequelize);

db.Receita = require('../models/postagem.js')
        (sequelize, Sequelize);

db.Categoria = require('../models/comentario.js')
        (sequelize, Sequelize);

//falta fazer os relacionamentos aqui:
/* db.Categoria.hasMany(db.Receita,
        {foreignKey: 'categoriaId', onDelete: 'NO ACTION'});
 */
module.exports = db;