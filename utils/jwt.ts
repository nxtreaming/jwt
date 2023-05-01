import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const createToken = (payload: object): string => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, secret);
    return typeof decoded === 'object' && decoded !== null ? (decoded as JwtPayload) : null;
  } catch (err) {
    return null;
  }
};
