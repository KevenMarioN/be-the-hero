const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
beforeEach(async () =>{
    await connection.migrate.latest();
});
describe('ONG',() =>{
    it('should de able to create a new ONG',() =>{
        const response = request(app)
        .post('/ongs')
        .send({
            name:"vgs",
            email : "ds022@gmail.com",
            whatsapp : "543333334",
            city : "Barreiras",
            uf : "BA"
        })
        
        console.log(response);
        //expect(response.body).toHaveProperty('id');
        //expect(response.body.id).toHaveLength(8);
    });
});