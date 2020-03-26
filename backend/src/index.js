const express = require("express");
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/** 
* Rota / Recurso
*/
/**
 * Mètodo HTTP:
 * 
 * GET : Busca uma informação do back-end
 * POST : Criar ma informação no back-end
 * PUT : Alterar uma informação no back-end
 * DELETE : Deletar uma infromação no bakc-end
 * 
 */

 /**
  * Tipos de parâmetros :
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros,Páginação) e "&" separa parâmetros
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL : MysSQL, SQLite, POstgreSQL, Oracle, Microsoft SQL Server
   * NoSQL : MongoDB, CouchDb, etc
   */

   /**
    * Driver : SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */



app.listen("3333");