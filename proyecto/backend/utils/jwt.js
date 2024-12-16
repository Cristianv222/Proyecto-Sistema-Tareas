import jwt from 'jsonwebtoken';

const secretKey = 'miClaveSecreta';

const generateToken = (userId, roleId) => {
  const payload = { userId, roleId };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export { generateToken };
export default utilsJwt;