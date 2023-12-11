const Sequelize = require('sequelize');
const sequelize = new Sequelize('trab2', 'postgres', '1234',
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

db.Curtida = require('../models/curtida.js')
        (sequelize, Sequelize);

db.Postagem.hasMany(db.Comentario, {
        foreignKey: 'postagemId',
        onDelete: 'NO ACTION'
});
db.Usuario.hasMany(db.Postagem, {
        foreignKey: 'usuarioId',
        onDelete: 'NO ACTION'
});
db.Postagem.hasMany(db.Curtida, {
        foreignKey: 'postagemId',
        onDelete: 'NO ACTION'
});
db.Usuario.hasMany(db.Curtida, {
        foreignKey: 'remetenteId',
        as: 'CurtidasEnviadas',
        onDelete: 'NO ACTION'
});
db.Usuario.hasMany(db.Curtida, {
        foreignKey: 'destinatarioId',
        as: 'CurtidasRecebidas',
        onDelete: 'NO ACTION'
});


module.exports = db;