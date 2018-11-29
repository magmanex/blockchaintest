const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
const provider = ganache.provider({gasLimit: 10000000});
const web3 = new Web3(provider);

//get output of the compilers  
const {interface,bytecode} = require('./compile');
let auth;
let accounts;

const deploy = async () => {

    // Get list of all accounts       
    accounts = await web3.eth.getAccounts();
    
    (new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode})
        .send({from:accounts[0], gas: 10000000}))
        .then(contract => {
            auth = contract
            console.log(accounts)
            app.listen(8000, () => console.log("listen on port 8000!!!"))
        })
}

deploy()

app.get('/', async (req, res) => {
    res.setHeader("content-type" , "text/html")
    res.sendfile(path.join(__dirname+"/index.html"))
})



app.get('/api/getpost/',async function (req,res) {
    var tmp = await auth.methods.getBalance().call({from: accounts[0]})
    console.log(tmp)
    res.json({
        tmp
    })
})
app.get('/getComment/:id', function (req,res) {
    var tmp2 = auth.methods.getComments(0).call({from: accounts[0]})
    res.json({tmp2})
})


app.post('/api/addPost', async function (req,res) {
    console.log(req.body)
    var tmp = await auth.methods.setBalance(req.body.id).call({from: accounts[0]});
    // var tmp2 = await auth.methods.getPosts(0).call({from: accounts[0]});
    console.log(tmp);
    res.json()
})
app.post('/api/addComment', function (req,res) {
    
})