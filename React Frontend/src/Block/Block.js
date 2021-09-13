const HDWalletProvider =  require('truffle-hdwallet-provider');


const Web3 = require('web3');


const provider = new HDWalletProvider(
    'add moment session mirror pen ribbon eternal clock wing impact estate erode',
    'https://rinkeby.infura.io/v3/fc049e1ca6544358b81c0d93ab37ed12'
);

const web3 = new Web3(provider);
const accounts = web3.eth.getAccounts().then(success=>{
    console.log(success);
});
console.log('Deploying from: ', accounts);
