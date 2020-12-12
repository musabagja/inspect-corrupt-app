const jwt = require('jsonwebtoken');

class Jwt {
  static sign(payload) {
    return jwt.sign(payload, 'JWT_SECRET');
  }

  static verify(token) {
    return jwt.verify(token, 'JWT_SECRET');
  }
}

module.exports = Jwt;