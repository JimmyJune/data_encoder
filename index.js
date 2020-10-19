var AES = require("crypto-js/aes");
const fs = require('fs');
const encrypt = require('./encrypt');

if (process.argv.length != 4){
    console.log('node index.js path_to_recon_json path_to_model_file');
    process.exit();
}
    
let recon_json = process.argv[2];
let model_file = process.argv[3];

console.log(recon_json, model_file);

key = 'RNWHLMuDrEpW00z0';

fs.readFile(recon_json, 'utf8', function(err, data){
    // console.log(data);  
    let jm = encrypt.Encrypt(data, key);
    fs.writeFileSync('deploy2.bin', jm)
});

fs.readFile(model_file, 'utf8', function(err, data){
    // console.log(data);  
    let jm = encrypt.Encrypt(data, key);
    fs.writeFileSync('model.model', jm)
});


