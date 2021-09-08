//Importing Path
const path = require('path');

//Importing fs
const fs = require('fs');

//Importing solc
const solc = require('solc');

//Getting Smart Contract
const inboxPath = 
    path.resolve
    (
        __dirname,
        '../SmartContracts/e-voting.sol',
        'EVoting.sol'
    );

const source = fs.readFileSync(inboxPath, 'utf-8');

module.exports = 
    solc.compile(
        source,
        1
    ).contracts
    [
        ':EVoting'
    ];