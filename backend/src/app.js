const express = require("express");
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
* Métodos HTTP:
*
* GET: Busca uma informação no back-end
* POST: Cria uma informação no back-end
* PUT: Altera uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*').where();
 */

