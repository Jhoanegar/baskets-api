const request = require('supertest');

const app = require('../../app');
const { findAllBaskets, clearBaskets } = require('../../models/baskets');
const v4Regex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

describe('Baskets endpoints', () => {

  beforeEach(() => {
    clearBaskets();
  })

  describe('POST /baskets', () => {
    it('creates a basket', async() => {
      const response = await request(app).post(`/baskets`);

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({
        id: expect.stringMatching(v4Regex),
      })
      expect(findAllBaskets()).toHaveLength(1);
    })
  })
})