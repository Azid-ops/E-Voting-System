import web3 from './web3';

const address = '0x96457AE2D97a6Aeb00e8602d8351238BC4F36eB2';

const abi = 
[
	{
	  inputs: 
	  [
		{
			"internalType":"string",
			"name":"_name",
			"type":"string"
		},
		{
			"internalType":"string",
			"name":"_party",
			"type":"string"
		},
		{
			"internalType":"uint256",
			"name":"_age",
			"type":"uint256"
		},
		{
			"internalType":"string",
			"name":"_qualification",
			"type":"string"
		}],
	  name: 'addMembers',
	  outputs: [],
	  stateMutability: 'nonpayable',
	  type: 'function',
	  constant: undefined,
	  payable: undefined,
	  signature: '0x45ec232d'
	},
	{
	  inputs: [],
	  name: 'owner',
	  outputs: 
		[
			{
				"internalType":"address",
				"name":"",
				"type":"address"
			}
		],
	  stateMutability: 'view',
	  type: 'function',
	  constant: true,
	  payable: undefined,
	  signature: '0x8da5cb5b'
	},
	{
	  inputs:
		[
			{
			"internalType":"string",
			"name":"name",
			"type":"string"
			}
		],
	  name: 'showMembers',
	  outputs: 
	  	[
			{
				"internalType":"string",
				"name":"_name",
				"type":"string"
			},
			{
				"internalType":"string",
				"name":"_party",
				"type":"string"
			},
			{
				"internalType":"uint256",
				"name":"_age",
				"type":"uint256"
			},
			{
				"internalType":"string",
				"name":"_qualification",
				"type":"string"
			}
		],
	  stateMutability: 'view',
	  type: 'function',
	  constant: true,
	  payable: undefined,
	  signature: '0x8ff4c363'
	}
  ]
  

export default new web3.eth.Contract(abi, address);