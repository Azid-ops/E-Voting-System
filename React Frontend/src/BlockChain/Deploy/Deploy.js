const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('../Compiler/compile');

const provider = new HDWalletProvider(
    'add moment session mirror pen ribbon eternal clock wing impact estate erode',
    'https://mainnet.infura.io/v3/fc049e1ca6544358b81c0d93ab37ed12'
);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract
}