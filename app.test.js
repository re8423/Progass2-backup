const { TestScheduler } = require('jest')
const request = require('supertest')
require('jest-fetch-mock').enableMocks()
const app = require('./app')

describe('test service', () => {


    test('getall works', () =>{
        function callback(data) {
            return request(app)
        .get('/getall')
        .expect('Content-type', /json/)
        .expect(200);
        }
    });

    test('getinfo works', () =>{
        function callback(data) {
            return request(app)
        .get('/getinfo')
        .expect('Content-type', /json/)
        .expect(200);
        }
    });


    test('getimg works', () =>{
        function callback(data) {
            return request(app)
            .get('/getimg2')
            .expect('Content-type', /json/)
            .expect(200);
        }
    });
    
    test('addcomp works',  () => {
        function callback(data) {
            request(app)
            .post('/getcomp')
            .send({compuser: "me",coursename: "test"})
            .expect(200)
        }
    })
});
