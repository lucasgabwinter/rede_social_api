const routes = require('./routers/route');
const express = require('express');
const swaggerUI = require('swagger-ui-express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const swaggerDocument  =require('./swagger.json')
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(routes);

app.use(
    express.urlencoded({
        extended: true
    })
)

app.listen(3000, function() {
    console.log("Servidor no http://localhost:3000");
})