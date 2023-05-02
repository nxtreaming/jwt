import { NextRouter } from 'next/router';

export const logout = (router: NextRouter) => {
  localStorage.removeItem('token');
  router.push('/login');
};
