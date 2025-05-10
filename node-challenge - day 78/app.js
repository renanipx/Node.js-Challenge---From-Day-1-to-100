const bank = require('./commands/accountCommands');

const accountId = 'acc-001';

bank.deposit(accountId, 100);
bank.withdraw(accountId, 30);
bank.deposit(accountId, 50);

console.log('Balance:', bank.getBalance(accountId));
console.log('Event History:', bank.getEventHistory(accountId));
