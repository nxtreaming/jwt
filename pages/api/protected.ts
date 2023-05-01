import { NextApiResponse } from 'next';
import nc from 'next-connect';
import authMiddleware from '../../middlewares/auth';
import { NextApiRequestWithUser } from '../../types/next-api-request';

const handler = nc();

handler.use(authMiddleware);

handler.get(async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  res.status(200).json({ message: 'Protected route accessed', user: req.user });
});

export default handler;
