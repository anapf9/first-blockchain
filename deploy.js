const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'kiwi neutral carbon century romance capable improve useless exhibit hurry coach immune',
    'https://rinkeby.infura.io/v3/d397aae599c74761bbbf1a3e444ce0c3'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Atenção ao deploy da conta', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to', result.options.address)
}
 deploy();