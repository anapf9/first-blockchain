const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  // inicia com letra maiuscula pois estamos importando uma função construtora que é usado para criar uma instancia do Web3
// Updates
const provider = ganache.provider(); // criando uma instancia para se conectar ao localhost ganache
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!';

beforeEach(async () => {
  //  Get a list of all accounts
  accounts = await web3.eth.getAccounts(); // return a promise beacuse is asyncronus
    /* .then(fetchAccounts => {
      console.log(fetchAccounts)
    }) */ 
  // Use one of those accounts to deploy the contract
  // create a instance of contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' });

  // update
  // inbox.setProvider(provider);
});

describe ('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok((inbox.options.address))
  });

  // toda vez que fizermos um deploy uma instancia do contrato nos teremos uma mensagem default setada
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!')
  });

  it('can change de message', async () => {
    // usamos sempre o inbox.methods sempre que quisermos pegar ou modificar algum valor
    await inbox.methods.setMessage('CHANGE').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'CHANGE');
  })
});
