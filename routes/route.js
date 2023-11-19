const express = require('express');;
const db = require('../config/db_sequelize');

/* const controllerUsuario = require('../controllers/controllerUsuario');
const controllerComentario = require('../controllers/controllerComentario');
const controllerPostagem = require ('../ controllers/controllerPostagem'); */

const route = express.Router();

/* db.sequelize.sync({force: true}).then(() => {
    console.log('{ force: true }');
}); */

//db.Usuario.create({login: 'admin', senha: '1234', tipo:1});

module.exports = route;

//Controller Usuario
route.get("/usuarios", controllerUsuario.getUsuarios);
route.get("/usuarios/:id", controllerUsuario.getUsuarioById);
route.post("/usuarios", controllerUsuario.postComentario);
route.put("/usuarios/:id", controllerUsuario.putComentario);
route.get("/usuarios/:id", controllerUsuario.deleteComentario);

//Controller Postagem
route.get("/postagens", controllerPostagem.getPostagens);
route.get("/postagens/:id", controllerPostagem.getPostagemById);
route.post("/postagens", controllerPostagem.postPostagem);
route.put("/postagens/:id", controllerPostagem.putPostagem);
route.get("/postagens/:id", controllerPostagem.deletePostagem);


//Controller Comentario
route.get("/comentarios", controllerComentario.getComentarios);
route.get("/comentarios/:id", controllerComentario.getComentarioById);
route.post("/comentarios", controllerComentario.postComentario);
route.put("/comentarios/:id", controllerComentario.putComentario);
route.get("/comentarios/:id", controllerComentario.deleteComentario);

//-------------------------------------------------------------------------
