const eventStore = [];

module.exports = {
  append(event) {
    eventStore.push(event);
  },
  getEventsByAccountId(accountId) {
    return eventStore.filter(e => e.accountId === accountId);
  },
  getAllEvents() {
    return [...eventStore];
  }
};
