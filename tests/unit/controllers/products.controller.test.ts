import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsController from '../../../src/controller/products';
import productsServices from '../../../src/services/products';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('should insert a new product and return the created product', async function () {
    const reqBody = {
      name: 'Product 1',
      price: '9.99',
      userId: 1
    };
    const expectedProduct = {
      id: 1,
      name: 'Product 1',
      price: '9.99',
      userId: 1
    };
    req.body = reqBody;
    sinon.stub(productsServices, 'insertItem').resolves(expectedProduct);

    await productsController.insertItem(req, res);

    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be.calledWith(expectedProduct);
  });
});
