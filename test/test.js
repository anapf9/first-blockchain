const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  // inicia com letra maiuscula pois estamos importando uma função construtora que é usado para criar uma instancia do Web3
const web3 = new Web3(ganache.provider()); // criando uma instancia para se conectar ao localhost ganache

let accounts;

beforeEach(async () => {
  //  Get a list of all accounts
  accounts = await web3.eth.getAccounts() // return a promise beacuse is asyncronus
    .then(fetchAccounts => {
      console.log(fetchAccounts)
    })
  // Use one of those accounts to deploy the contract
})

describe ('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts)
  })
})