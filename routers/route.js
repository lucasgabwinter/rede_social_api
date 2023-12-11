const express = require('express');;
const db = require('../config/db_sequelize');

const controllerUsuario = require('../controllers/controllerUsuario');
const controllerComentario = require('../controllers/controllerComentario');
const controllerPostagem = require('../controllers/controllerPostagem');
const controllerCurtida = require('../controllers/controllerCurtida');

const route = express.Router();

// Associações dos modelos
Object.values(db).forEach(model => {
    if (model.associate) {
        model.associate(db);
    }
});

db.sequelize.sync({ force: true }).then(() => {
    console.log('{ force: true }');
    db.Usuario.create({ login: 'lucas', senha: '1234' });
    db.Usuario.create({ login: 'gabriella', senha: '1234' });
});
module.exports = route;


//Controller Usuario
route.get("/usuarios", controllerUsuario.getUsuarios);
route.get("/usuarios/:login", controllerUsuario.getUsuarioByLogin);
route.post("/usuarios", controllerUsuario.postUsuario);
route.put("/usuarios/:id", controllerUsuario.putUsuario);
route.delete("/usuarios/:login", controllerUsuario.deleteUsuario);

//Controller Postagem
route.get("/postagens/:id", controllerPostagem.getPostagemById);
route.get("/postagens/porUsuario/:usuarioId", controllerPostagem.getPostagensByUser);
route.post("/postagens/:usuarioId", controllerPostagem.postPostagem);
route.put("/postagens/:id", controllerPostagem.putPostagem); //editar não tava nos requisitos
route.delete("/postagens/:id", controllerPostagem.deletePostagem);
route.patch("/postagens/:id/curtidoPor/:usuarioId", controllerPostagem.patchPostagem);


//Controller Comentario
route.get("/comentarios/:id", controllerComentario.getComentarioById);
route.get("/comentarios/porPostagem/:postagemId", controllerComentario.getComentariosByPostagem);
route.post("/comentarios/:postagemId", controllerComentario.postComentario);
route.put("/comentarios/:id", controllerComentario.putComentario);
route.delete("/comentarios/:id", controllerComentario.deleteComentario);

//Controller Curtidas
route.get("/curtidas/mais-curtidos", controllerCurtida.getMaisCurtidos);

