const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  // inicia com letra maiuscula pois estamos importando uma função construtora que é usado para criar uma instancia do Web3
const web3 = new Web3(ganache.provider()); // criando uma instancia para se conectar ao localhost ganache

class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

describe('Car', () => {
    it('park should return a string', () => {
        const car = new Car();
        assert.equal(car.park(), 'stopped')
    });
})