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
// colocamos a variavel para fora da função para que as posteriores possam saber que a instancia foi iniciada antes delas
let car; // ussamos o let pois vamos mudar o valor da variavel

beforeEach(() => {
    car = new Car(); // a variavel car uma nova atribuição
})

describe('Car', () => {
    it('park should return a string', () => {
        assert.equal(car.park(), 'stopped')
    });

    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    });
})