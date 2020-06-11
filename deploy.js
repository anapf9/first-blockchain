const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'butter pride reunion dismiss wasp pool giggle tide source pitch during hip',
    'https://rinkeby.infura.io/v3/7789a4708fbc490dba66cb4efa9f4966'
);
const web3 = new Web3(provider);
