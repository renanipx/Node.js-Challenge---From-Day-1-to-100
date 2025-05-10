# gRPC Node.js Demo

A simple demonstration of gRPC communication between services using Node.js.

## Project Structure

```
.
├── proto/
│   └── greeter.proto    # Protocol Buffer definition
├── server.js           # gRPC server implementation
├── client.js           # gRPC client implementation
└── package.json        # Project dependencies
```

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the Demo

1. Start the server in one terminal:
```bash
npm run start:server
```

2. In another terminal, run the client:
```bash
npm run start:client
```

The client will send a request to the server, and you should see the response in the client's terminal.

## How it Works

- The server implements a simple greeting service that responds to client requests
- The client sends a request with a name and receives a greeting message
- Communication is handled using gRPC, which provides efficient binary protocol communication 