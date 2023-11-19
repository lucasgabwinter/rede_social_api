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
route.get("/usuarios/:nome", controllerUsuario.getUsuarioByName);
//falta listagem por numero de curtida
route.post("/usuarios", controllerUsuario.postUsuario);
route.put("/usuarios/:id", controllerUsuario.putUsuario);
route.get("/usuarios/:id", controllerUsuario.deleteUsuario);

//Controller Postagem
route.get("/postagens", controllerPostagem.getPostagens);
//falta listagem por usuario
route.post("/postagens", controllerPostagem.postPostagem);
route.put("/postagens/:id", controllerPostagem.putPostagem); //editar não tava nos requisitos
route.get("/postagens/:id", controllerPostagem.deletePostagem);


//Controller Comentario
route.get("/comentarios", controllerComentario.getComentarios);
route.get("/comentarios/:id", controllerComentario.getComentarioById);
route.post("/comentarios", controllerComentario.postComentario);
route.put("/comentarios/:id", controllerComentario.putComentario);
route.get("/comentarios/:id", controllerComentario.deleteComentario);

//-------------------------------------------------------------------------
