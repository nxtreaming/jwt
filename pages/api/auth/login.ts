import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { createToken } from '../../../utils/jwt';

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  // Replace with your own authentication logic
  if (username === 'user' && password === 'password') {
    const token = createToken({ username });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

export default handler;
