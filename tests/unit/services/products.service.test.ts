import { expect } from 'chai';
import sinon, { stub } from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsServices from '../../../src/services/products';


describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

});
it('should create a new product and return the correct response', async function () {
  const product = {
    id: 1,
    name: 'Test Product',
    price: '10.99',
    userId: 1,
  };

  const createStub = stub(ProductModel, 'create').resolves();
  const getLastIdStub = stub(ProductModel, 'findAll').resolves([]);

  const result = await productsServices.insertItem(product);

  expect(createStub.calledOnceWith(product)).to.be.true;
  expect(result).to.deep.equal({
    id: 1,
    name: 'Test Product',
    price: '10.99',
    userId: 1,
  });
});
