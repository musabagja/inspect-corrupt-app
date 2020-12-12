require('@babel/register')

const server = require('../app');

module.exports = async () => {
  global.httpServer = server;
  await global.httpServer.listen();
};
