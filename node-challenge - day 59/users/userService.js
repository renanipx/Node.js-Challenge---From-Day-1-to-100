const users = [
    { id: 1, username: 'alice', secretKey: 'abc123' },
    { id: 2, username: 'bob', secretKey: 'xyz789' }
];

async function authenticate(username, secretKey) {
    return users.find(
        user => user.username === username && user.secretKey === secretKey
    );
}

module.exports = { authenticate };
