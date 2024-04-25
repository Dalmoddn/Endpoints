import chai, { expect } from 'chai';
import sinon from 'sinon';
import getUserServices from '../../../src/services/user';
import UserModel from '../../../src/database/models/user.model';
import ProductModel from '../../../src/database/models/product.model';


describe('UsersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should return an array of user objects with their associated product ids', async function () {
    const mockUsers: any = [
      { dataValues: { id: 1, username: 'user1' } },
      { dataValues: { id: 2, username: 'user2' } },
    ];
    const mockProducts: any = [
      { dataValues: { id: 1, userId: 1 } },
      { dataValues: { id: 2, userId: 1 } },
      { dataValues: { id: 3, userId: 2 } },
    ];

    sinon.stub(UserModel, 'findAll').resolves(mockUsers);
    sinon.stub(ProductModel, 'findAll').resolves(mockProducts);

    const expectedResponse = [
      { username: 'user1', productIds: [1, 2] },
      { username: 'user2', productIds: [3] },
    ];

    const result = await getUserServices.getUsersServices();

    expect(result).to.deep.equal(expectedResponse);
  });

});
