import Web3 from 'web3';

const web3 = {
    astar: new Web3('wss://wss-astar-node.terrabiodao.org'),
    shibuya: new Web3('wss://wss-shibuya-node.terrabiodao.org'),
    shiden: new Web3('wss://rpc.shiden.astar.network'),
};

export default web3;
