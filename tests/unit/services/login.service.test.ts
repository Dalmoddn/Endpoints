import { expect } from 'chai';
import sinon from 'sinon';
import loginService from '../../../src/services/login';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should throw an error if username or password is not provided', async () => {
    try {
      await loginService.login('username', '');
    } catch (err: any) {
      expect(err.message).to.equal('"username" and "password" are required');
    }
  });

  it('should throw an error if username or password is invalid', async () => {
    try {
      await loginService.login('Sven', 'Nyx Assassin');
    } catch (err: any) {
      expect(err.message).to.equal('Username or password invalid');
    }

    sinon.restore();
  });

  it('should return a session token if username and password are valid', async () => {
    const token = await loginService.login('Hagar', 'terrível');

    expect(token).to.be.a('string');

    sinon.restore();
  });
});
