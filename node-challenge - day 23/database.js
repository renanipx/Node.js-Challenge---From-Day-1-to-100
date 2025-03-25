// Simulating a database with Promises
const users = [
    { id: 1, name: 'Ana', email: 'ana@email.com' },
    { id: 2, name: 'Carlos', email: 'carlos@email.com' },
    { id: 3, name: 'Mariana', email: 'mariana@email.com' },
  ];
  
  // Function to find a user by ID
  function findUserById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find((u) => u.id === id);
        user ? resolve(user) : reject(new Error('User not found!'));
      }, 1000); // Simulating a response time
    });
  }
  
  module.exports = { findUserById };
  