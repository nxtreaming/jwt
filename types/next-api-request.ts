import { NextApiRequest } from 'next';
import { JwtPayload } from 'jsonwebtoken';

export interface NextApiRequestWithUser extends NextApiRequest {
  user?: JwtPayload;
}
