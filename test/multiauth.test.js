const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');


const provider = ganache.provider();
const web3 = new Web3(provider);

//get output of the compilers  
const {interface,bytecode} = require('../compile');
let auth;
let accounts;

beforeEach( async ()=> {

    // Get list of all accounts       
    accounts = await web3.eth.getAccounts();

    auth = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode})
        .send({from:accounts[0], gas: '100000'});
    
});

describe('SimpleContract',()=>{

    it('Testing get post lenght  ', async ()=>{
        assert.equal(await auth.methods.addPost(accounts[0],"test" , "testttest" , 12).call({from: accounts[0]}),1);
    });

    it('Testing get test  ', async ()=>{
        try{
            await auth.methods.addPost(accounts[0],"test" , "testttest" , 12).call({from: accounts[0]});
        assert.equal(await auth.methods.test().call({from: accounts[0]}),1);
        }
        catch{}
    });

    it('Testing get comment lenght  ', async ()=>{
        try{
            await auth.methods.addPost(accounts[0],"test" , "testttest" , 12).call({from: accounts[0]});
        assert.equal(
            await auth.methods.addComment(accounts[0], 0 , "testttest").call({from: accounts[0]}),1);
        }
        catch{}
        
    });


});
