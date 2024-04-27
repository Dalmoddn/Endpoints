import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginController from '../../../src/controller/login';
import loginServices from '../../../src/services/login';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('should return a token when valid username and password are provided', async function () {
    const username = 'testuser';
    const password = 'testpassword';
    req.body = { username, password };

    const token = 'testtoken';
    sinon.stub(loginServices, 'login').resolves(token);

    await loginController.login(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith({ token });
  });

  it('should return a 401 status code when invalid username or password are provided', async function () {
    const username = 'testuser';
    const password = 'testpassword';
    req.body = { username, password };

    const errorMessage = 'Username or password invalid';
    sinon.stub(loginServices, 'login').throws(new Error(errorMessage));

    await loginController.login(req, res);

    expect(res.status).to.be.calledWith(401);
    expect(res.json).to.be.calledWith({ message: errorMessage });
  });
  it('should return a 400 status code when an error occurs', async function () {
    const username = 'testuser';
    const password = 'testpassword';
    req.body = { username, password };

    const errorMessage = 'Some error occurred';
    sinon.stub(loginServices, 'login').throws(new Error(errorMessage));

    await loginController.login(req, res);

    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({ message: errorMessage });
  });

});
