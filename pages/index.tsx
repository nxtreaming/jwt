import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { logout } from '../utils/logout';
import Link from 'next/link'

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    logout(router);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="/protected">protected route</Link> {isLoggedIn ? "" : (<> | <Link href="/login">Login</Link></>)}
      </nav>
      {isLoggedIn ? (
        <>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default HomePage;

