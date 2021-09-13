const path = require('path');

const fs = require('fs');

const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contract', 'Voting.sol');

const source = fs.readFileSync(inboxPath, 'utf-8');

var input = {
    language: 'Solidity',
    sources: {
        'Voting.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ "abi", "evm.bytecode" ]
            }
        }
    }
}; 

console.log((solc.compile(JSON.stringify(input))));

module.exports = solc.compile(JSON.stringify(input));







