import React from 'react';
import { Link } from 'react-router-dom';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';

function Main() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogout = () => {
    instance.logoutRedirect().catch((error) => {
      console.error('Logout redirect error:', error);
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>HelpDesk Portal</h1>
        <nav>
          <Link to="/" className="button secondary">
            Tickets
          </Link>
          <button type="button" className="button primary" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
      <main>
        <p className="welcome-message">You are signed in. Use the navigation to manage tickets.</p>
        <Link to="/" className="button primary">
          View tickets
        </Link>
      </main>
    </div>
  );
}

export default Main;
