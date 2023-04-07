const ethers = require('ethers');
const fs = require('fs');
const util = require('util');

const main = async () => {
    const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545');
    const wallet = new ethers.Wallet('0x31d29706e98e524aaff8b9733ce2f975a504bb72f33fbf9c4518d3d8f56cc984', provider);
    const abi = fs.readFileSync('./contracts_SimpleStorage_sol_SimpleStorage.abi', 'utf-8');
    const binary = fs.readFileSync('./contracts_SimpleStorage_sol_SimpleStorage.bin', 'utf-8');
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log('Deploying, please wait..');
    const contract = await contractFactory.deploy();
    console.log(util.inspect(contract, {
        showHidden: false,
        colors: true,
    }, null));
}

main().then(r => {
});
