const fs = require('fs');

(async () => {
  const wasmBuffer = fs.readFileSync('./add.wasm');
  const wasmModule = await WebAssembly.instantiate(wasmBuffer);
  const { add } = wasmModule.instance.exports;

  console.log('7 + 5 =', add(7, 5));
})();
