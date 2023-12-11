const { Sequelize } = require('sequelize');
const db = require('../config/db_sequelize');

module.exports = {
    async getMaisCurtidos(req, res) {
        try {
            const curtidas = await db.Curtida.findAll();
            const usuarios = await db.Usuario.findAll();

            // Realiza a contagem de curtidas por destinatário
            const contagemCurtidas = curtidas.reduce((acc, curtida) => {
                const destinatarioId = curtida.destinatarioId;
                acc[destinatarioId] = (acc[destinatarioId] || 0) + 1;
                return acc;
            }, {});

            // Mapea os resultados para o formato desejado
            const maisCurtidos = Object.keys(contagemCurtidas).map((destinatarioId) => {
                const totalCurtidas = contagemCurtidas[destinatarioId];
                const destinatario = usuarios.find((usuario) => usuario.id == destinatarioId);
                return {
                    destinatarioId,
                    totalCurtidas,
                    loginDestinatario: destinatario ? destinatario.login : null,
                };
            });

            // Ordena por total de curtidas
            maisCurtidos.sort((a, b) => b.totalCurtidas - a.totalCurtidas);

            res.status(200).json(maisCurtidos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno no servidor' });
        }
    }
};
