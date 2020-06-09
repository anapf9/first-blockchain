const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  // inicia com letra maiuscula pois estamos importando uma função construtora que é usado para criar uma instancia do Web3
// Updates
const provider = ganache.provider(); // criando uma instancia para se conectar ao localhost ganache
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile')

let accounts;
let inbox;

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
    .send({ from: accounts[0], gas: '1000000' })

  // update
  inbox.setProvider(provider);
})

describe ('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok((inbox.options.address))
  })
})
