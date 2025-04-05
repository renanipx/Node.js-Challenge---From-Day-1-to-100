const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost', 
  credentials: true,
};

module.exports = cors(corsOptions);
