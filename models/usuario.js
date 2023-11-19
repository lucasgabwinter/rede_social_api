const { Usuario } = require("../config/db_sequelize");

module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement: true, 
            allNull: false, 
            primaryKey: true
        },
        login: {
            type: Sequelize.STRING, allowNull: false
        },
        senha: {
            type: Sequelize.STRING, allowNull: false
        },
    });
    return Usuario;
}
