import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import getUsersBuy from '../../../src/controller/user';
import usersServices from '../../../src/services/user';


chai.use(sinonChai);

describe('UsersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  describe('getUsersBuy', function () {
    const usersMock = [{ username: 'user1', productIds: [1, 2] }];
    it('should return a list of users with status 200', async function () {
      const getUsersServicesStub = sinon.stub(usersServices, 'getUsersServices').resolves(usersMock);

      await getUsersBuy.getUsersBuy(req, res);

      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWith(usersMock);
      expect(getUsersServicesStub).to.be.calledOnce;
    });

    it('should return an error message with status 500 if getUsersServices throws an error', async function () {
      const error = new Error('Não foi possível listar os usuários.');
      const getUsersServicesStub = sinon.stub(usersServices, 'getUsersServices').throws(error);

      await getUsersBuy.getUsersBuy(req, res);

      expect(res.status).to.be.calledWith(500);
      expect(res.json).to.be.calledWith({ message: 'Não foi possível listar os usuários.' });
      expect(getUsersServicesStub).to.be.calledOnce;
    });

  });
});
