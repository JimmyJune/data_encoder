#!/usr/bin/env node
var AES = require("crypto-js/aes");
const fs = require('fs');
const encrypt = require('./encrypt');
var path = require("path")

if (process.argv.length != 4){
    console.log('node index.js input_dir output_dir');
    console.log('input dir where deploy.json and model.obj are')
    process.exit();
}

let input_dir = process.argv[2];
let output_dir = process.argv[3];
    
let recon_json = path.join(input_dir, 'deploy.json');
let model_file = path.join(input_dir, 'model/model.obj');

console.log(recon_json, model_file);

// 如果输出目录不存在就创建
if (!fs.existsSync(output_dir)){
    fs.mkdirSync(output_dir);
}

let output_recon_json = path.join(output_dir, 'deploy2.bin');
let output_model_file = path.join(output_dir, 'model.model');

key = 'RNWHLMuDrEpW00z0';

fs.readFile(recon_json, 'utf8', function(err, data){
    // console.log(data);  
    let jm = encrypt.Encrypt(data, key);
    fs.writeFileSync(output_recon_json, jm)
});

fs.readFile(model_file, 'utf8', function(err, data){
    console.log(data);  
    let jm = encrypt.Encrypt(data, key);
    fs.writeFileSync(output_model_file, jm)
});


