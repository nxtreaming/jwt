import { NextApiResponse } from 'next';
import nc from 'next-connect';
import { NextApiRequestWithUser } from '../../types/next-api-request';
import { verifyToken } from '../../utils/jwt';

const handler = nc();

handler.get(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  const decodedToken = verifyToken(token);

  if (!decodedToken) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.user = decodedToken;
  res.status(200).json({ message: 'Protected route accessed', user: req.user });
});

export default handler;
