const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
    '<Your mnemonic>',
    'https://rinkeby.infura.io/v3/a8bbaa7854eb43fcac5362216dea848f'

);
// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider); // inject from Metamask plugin
//     console.log
//   }
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Deploying to the Network using account : ', accounts[0]);
 
    // Please change the addresses according to your addresses 
    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({data: '0x'+ bytecode, arguments: [['0xdfd5e521f08bfcb9c00b90b40a11ac27a8aebed9'],'0x59526155e530bcb83725e1097d1b77ef5db892b3']})
     .send({gas: '1000000', from : accounts[0], value: '2000000' });

    console.log('Contract Deployed to : ', result.options.address);
};

deploy();
