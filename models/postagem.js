module.exports = (sequelize, Sequelize) => {
    const Postagem = sequelize.define('postagem', {
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
        horario:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        curtida:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return Postagem;
}
