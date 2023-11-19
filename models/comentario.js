module.exports = (sequelize, Sequelize) => {
    const Comentario = sequelize.define('comentario', {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement: true, 
            allNull: false, 
            primaryKey: true
        },
        conteudo: {
            type: Sequelize.STRING, 
            allowNull: false
        },
        postagemId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
        //nao sei se precisa relacionar o usuario
    });
    return Comentario;
}
