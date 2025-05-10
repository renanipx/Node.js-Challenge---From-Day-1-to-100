function createAccountFromEvents(events) {
  let balance = 0;
  for (const event of events) {
    if (event.type === 'MoneyDeposited') {
      balance += event.amount;
    } else if (event.type === 'MoneyWithdrawn') {
      balance -= event.amount;
    }
  }
  return { balance };
}

module.exports = { createAccountFromEvents };
