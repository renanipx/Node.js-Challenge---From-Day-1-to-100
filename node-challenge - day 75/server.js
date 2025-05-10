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

// Implement the SayHello RPC method
function sayHello(call, callback) {
  const response = {
    message: `Hello ${call.request.name}!`
  };
  callback(null, response);
}

// Create the gRPC server
const server = new grpc.Server();
server.addService(greeter.Greeter.service, { sayHello: sayHello });

// Start the server
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('gRPC server running on port 50051');
}); 