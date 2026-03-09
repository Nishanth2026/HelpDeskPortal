import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

function ProtectedLayout() {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect().catch((error) => {
      console.error('Logout redirect error:', error);
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>HelpDesk Portal</h1>
        <nav>
          <Link to="/" className="button secondary">
            Tickets
          </Link>
          <Link to="/main" className="button secondary">
            Main
          </Link>
          <button type="button" className="button primary" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ProtectedLayout;
