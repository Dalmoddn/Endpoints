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
  it('should insert a new product into the database', async function () {
    const product = {
      id: 1,
      name: 'Test Product',
      price: '10.99',
      userId: 1,
    };

    const createStub = stub(ProductModel, 'create').resolves();
    const getLastIdStub = stub(ProductModel, 'findAll').resolves([]);

    await productsServices.insertItem(product);

    expect(createStub.calledOnceWith(product)).to.be.true;
    expect(getLastIdStub.calledOnce).to.be.true;
  });
  it('should return the correct response after inserting a new product', async function () {
    const product = {
      id: 1,
      name: 'Test Product',
      price: '10.99',
      userId: 1,
    };

    const createStub = stub(ProductModel, 'create').resolves();
    const getLastIdStub = stub(ProductModel, 'findAll').resolves([]);
    const result = await productsServices.insertItem(product);

    expect(result).to.deep.equal({
      id: 1,
      name: 'Test Product',
      price: '10.99',
      userId: 1,
    });    
  });
  it('should return all products', async function () {
    const products: any = [
      {
        'dataValues': {
          id: 1,
          name: 'Khanda',
          price: '4500.00',
          userId: 1,
        },
      },
    ]

    const findAllStub = sinon.stub(ProductModel, 'findAll').resolves(products);
    const result = await productsServices.findProducts();

    expect(findAllStub.calledOnce).to.be.true;
    expect(result).to.deep.equal([
      {
        id: 1,
        name: 'Khanda',
        price: '4500.00',
        userId: 1,
      },
    ]);
  });
});
