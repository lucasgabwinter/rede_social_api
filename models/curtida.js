module.exports = (sequelize, Sequelize) => {
    const Curtida = sequelize.define('curtida', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        remetenteId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        destinatarioId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        postagemId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Curtida;
}
