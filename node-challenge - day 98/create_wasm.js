const fs = require('fs');

const wasmBase64 = 'AGFzbQEAAAABCAJgAAF/AwIBAAcCAQECAwEDAAEBBQEDAAABAQIDDwEBB2FkZAAAAw==';

const wasmBuffer = Buffer.from(wasmBase64, 'base64');
fs.writeFileSync('add.wasm', wasmBuffer);
console.log('add.wasm criado');
