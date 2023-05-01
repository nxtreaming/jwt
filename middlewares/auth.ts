import { NextApiResponse } from 'next';
import { NextApiRequestWithUser } from '../types/next-api-request';
import { verifyToken } from '../utils/jwt';

const authMiddleware = (handler: any) => async (
  req: NextApiRequestWithUser,
  res: NextApiResponse
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  const decodedToken = verifyToken(token);

  if (!decodedToken) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.user = decodedToken;
  return handler(req, res);
};

export default authMiddleware;
