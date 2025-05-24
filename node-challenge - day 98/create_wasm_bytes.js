const fs = require('fs');

const wasmBytes = new Uint8Array([
  0x00,0x61,0x73,0x6d, // WASM_MAGIC "\0asm"
  0x01,0x00,0x00,0x00, // WASM_VERSION 1
  // Type section
  0x01, // section code: Type
  0x07, // section length
  0x01, // number of types
  0x60, // func type
  0x02, // param count
  0x7f, // i32
  0x7f, // i32
  0x01, // result count
  0x7f, // i32
  // Function section
  0x03, // section code: Function
  0x02, // section length
  0x01, // number of functions
  0x00, // type index of function 0
  // Export section
  0x07, // section code: Export
  0x07, // section length
  0x01, // number of exports
  0x03, // string length
  0x61,0x64,0x64, // "add"
  0x00, // export kind: func
  0x00, // func index
  // Code section
  0x0a, // section code: Code
  0x09, // section length
  0x01, // number of functions
  0x07, // func body size
  0x00, // local count
  0x20,0x00, // local.get 0
  0x20,0x01, // local.get 1
  0x6a, // i32.add
  0x0b  // end
]);

fs.writeFileSync('add.wasm', wasmBytes);

console.log('Arquivo add.wasm criado byte a byte');
