const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the proto file
const packageDefinition = protoLoader.loadSync('./proto/greeter.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const greeter = protoDescriptor.greeter;

// Create a client
const client = new greeter.Greeter(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Make the RPC call
function sayHello(name) {
  client.sayHello({ name: name }, (error, response) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    console.log('Response:', response.message);
  });
}

// Test with different names
console.log('Testing gRPC communication...');
sayHello('World');
sayHello('Node.js');
sayHello('gRPC'); 