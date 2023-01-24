import app from '../server';
import supertest from 'supertest';

describe('GET /', () => {
    it('should return a default data', async () => {
        const res = await supertest(app).get('/');
        expect(res.body.message).toBe('Server is up.');
        expect(res.statusCode).toBe(200);
    })
})