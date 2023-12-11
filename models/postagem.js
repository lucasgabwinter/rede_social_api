module.exports = (sequelize, Sequelize) => {
    const Postagem = sequelize.define('postagem', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allNull: false,
            primaryKey: true
        },
        conteudo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        usuarioId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        totalCurtidas: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    });
    Postagem.associate = (models) => {
        Postagem.hasMany(models.Curtida, { foreignKey: 'postagemId', as: 'Curtidas' });
    };
    return Postagem;
}


