const store = require('../store/eventStore');
const events = require('../events/accountEvents');
const { createAccountFromEvents } = require('../models/account');

function deposit(accountId, amount) {
  const depositEvent = events.MoneyDeposited(accountId, amount);
  store.append(depositEvent);
}

function withdraw(accountId, amount) {
  const eventsForAccount = store.getEventsByAccountId(accountId);
  const account = createAccountFromEvents(eventsForAccount);
  
  if (account.balance < amount) {
    throw new Error('Insufficient funds');
  }

  const withdrawEvent = events.MoneyWithdrawn(accountId, amount);
  store.append(withdrawEvent);
}

function getBalance(accountId) {
  const eventsForAccount = store.getEventsByAccountId(accountId);
  const account = createAccountFromEvents(eventsForAccount);
  return account.balance;
}

function getEventHistory(accountId) {
  return store.getEventsByAccountId(accountId);
}

module.exports = { deposit, withdraw, getBalance, getEventHistory };
