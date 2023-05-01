declare module 'next-connect' {
  import { NextApiRequest, NextApiResponse } from 'next';

  type NextHandler = (err?: Error) => void;

  type Middleware = (
    req: NextApiRequest,
    res: NextApiResponse,
    next: NextHandler
  ) => void;

  interface NextConnect {
    (): NextConnect;
    use(middleware: Middleware): NextConnect;
    get(handler: Middleware): NextConnect;
    post(handler: Middleware): NextConnect;
    put(handler: Middleware): NextConnect;
    delete(handler: Middleware): NextConnect;
  }

  const nextConnect: NextConnect;
  export default nextConnect;
}
