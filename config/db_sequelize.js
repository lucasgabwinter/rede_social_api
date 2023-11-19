const Sequelize = require('sequelize');
const sequelize = new Sequelize('trab2', 'postgres', 'root',
        { host: 'localhost', dialect: 'postgres' });

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Usuario = require('../models/usuario.js')
        (sequelize, Sequelize);

db.Postagem = require('../models/postagem.js')
        (sequelize, Sequelize);

db.Comentario = require('../models/comentario.js')
        (sequelize, Sequelize);

//falta fazer os relacionamentos aqui:
db.Postagem.hasMany(db.Comentario, {
        foreignKey: 'postagemId',
        onDelete: 'NO ACTION'
});


module.exports = db;