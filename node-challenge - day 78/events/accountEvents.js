function MoneyDeposited(accountId, amount) {
  return {
    type: 'MoneyDeposited',
    accountId,
    amount,
    timestamp: Date.now()
  };
}

function MoneyWithdrawn(accountId, amount) {
  return {
    type: 'MoneyWithdrawn',
    accountId,
    amount,
    timestamp: Date.now()
  };
}

module.exports = { MoneyDeposited, MoneyWithdrawn };
