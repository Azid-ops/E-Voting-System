import web3 from './web3';

const address = '0x42A8aeea477CD70F9c2C6157AC196f23932207A9';

const abi = [
	{
	  inputs: [],
	  stateMutability: 'nonpayable',
	  type: 'constructor',
	  constant: undefined,
	  payable: undefined,
	  signature: 'constructor'
	},
	{
	  inputs: [],
	  name: 'owner',
	  outputs: [ [Object] ],
	  stateMutability: 'view',
	  type: 'function',
	  constant: true,
	  payable: undefined,
	  signature: '0x8da5cb5b'
	}
]

export default new web3.eth.Contract(abi, address);