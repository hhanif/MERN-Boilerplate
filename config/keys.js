if (process.env.NODE_ENV === 'production') {
  //In production mode, return the prod set of keys
  module.exports = require('./prod');
} else {
  // in development mode return development set of keys
  module.exports = require('./dev');
}
