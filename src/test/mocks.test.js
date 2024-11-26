import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js'; 

describe('Mock API Tests', function () {
    // Test para generar mascotas simuladas
    it('should generate mock pets', async function () {
        this.timeout(5000); // Establecer un timeout específico para esta prueba
        const res = await request(app).get('/api/mocks/mockingpets?num=100');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');
        expect(res.body.payload).to.be.an('array').that.has.lengthOf(100);  // Verifica que haya 100 mascotas
    });

    // Test para generar usuarios simulados
    it('should generate mock users', async function () {
        this.timeout(7000); // Establecer un timeout específico para esta prueba
        const res = await request(app).get('/api/mocks/mockingusers?num=50');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');
        expect(res.body.payload).to.be.an('array').that.has.lengthOf(50);  // Verifica que haya 50 usuarios
    });

    // Test para insertar datos simulados en la base de datos
    it('should insert mock data into the database', async function () {
        this.timeout(15000); // Establecer un timeout específico para esta prueba
        const res = await request(app)
            .post('/api/mocks/generateData')
            .send({ users: 10, pets: 20 })  // Mandas la data en el cuerpo de la solicitud
            .set('Content-Type', 'application/json');
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('status', 'success');
        expect(res.body).to.have.property('message').that.includes('users and pets inserted into the database');
    });
});
