const getUsers = (req, res) => {
    res.json([{ id: 1, name: 'João' }, { id: 2, name: 'Maria' }]);
  };
  
  module.exports = { getUsers };
  