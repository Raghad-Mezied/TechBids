/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');
const { build } = require('../src/config/dbBuild');
const { sequelize } = require('../src/config/connection');

beforeEach(() => build());

describe('filter products tests', () => {
  test('success', (done) => {
    request(app)
      .get('/api/products?status=ended&search=lap')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toStrictEqual({
          productData: [
            {
              id: 1,
              name: 'LabTop',
              description: 'Microsoft Surface Laptop 4 13.5” Touch-Screen – AMD Ryzen 5 Surface Edition - 8GB Memory - 256GB Solid State Drive (Latest Model) - Platinum',
              is_open: false,
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFAAF5nU8p12eycPHmPbcRKtb0_mZIOUwKA&usqp=CAU',
              auc_end_date: '2020-12-11T22:00:00.000Z',
              auc_amount: 400,
            },
          ],
        });
        return done();
      });
  });

  test('validation error', (done) => {
    request(app)
      .get('/api/products?status=open&categoryId=computer')
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Bad Request');
        return done();
      });
  });
});

afterAll(() => sequelize.close());
