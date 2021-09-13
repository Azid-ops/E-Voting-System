const HDWalletProvider =  require('truffle-hdwallet-provider');

console.log("running");

const Web3 = require('web3');

console.log("web3 done");

const compile = require('./compile');

console.log("Compiler extracted");

const interface = JSON.parse(compile).contracts["Voting.sol"].Voting.abi;


const bytecode = JSON.parse(compile).contracts["Voting.sol"].Voting.evm.bytecode.object;


const provider = new HDWalletProvider(
    'add moment session mirror pen ribbon eternal clock wing impact estate erode',
    'https://rinkeby.infura.io/v3/fc049e1ca6544358b81c0d93ab37ed12'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Deploying from: ', accounts[0]);

    const result = await new web3.eth.Contract(interface)
        .deploy({ data:bytecode })
        .send({gas:'1000000', from: accounts[0]});
    
    console.log('Contract deployed to', result.options.address);
    console.log(interface);
}

deploy();