const export_nfts_fromwallet = require('export-nfts-fromwallet');
const export_nfts_fromwallet_plus = require('export-nfts-fromwallet-plus');
const ethereumjs_util = require('ethereumjs-util');
const multer = require('multer');
const debug = require('debug');
const express = require('express');
const babel_core = require('babel-core');
const ethers = require('ethers');

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

// Create a new array with unique elements
const numbers = [1, 2, 3, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log('Unique numbers:', uniqueNumbers);

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

const path = require('path');
console.log(`The file name is ${path.basename(__filename)}`);

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');

const fs = require('fs');
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(`Files in the directory: ${files.join(', ')}`);
});

// Deploy a smart contract using Truffle
const TruffleContract = require('@truffle/contract');
const contractJson = require('./build/contracts/YourContract.json');
const contract = TruffleContract(contractJson);
contract.setProvider(web3.currentProvider);

contract.deployed().then(instance => {
  console.log('Contract address:', instance.address);
}).catch(err => {
  console.error('Error deploying contract:', err);
});

const url = require('url');
const myUrl = new URL('https://example.com/foo/bar?query=string');
console.log('Pathname:', myUrl.pathname);
console.log('Query:', myUrl.searchParams.get('query'));