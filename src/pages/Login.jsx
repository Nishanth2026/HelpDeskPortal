import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { loginRequest } from '../authConfig';

function Login() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (isAuthenticated) {
      const from = (location.state && location.state.from) ? location.state.from.pathname : '/main';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location.state]);

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((error) => {
      console.error('Login redirect error:', error);
    });
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>HelpDesk Portal</h1>
        <p>Sign in with your Microsoft account to continue.</p>
        <button type="button" className="button primary" onClick={handleLogin}>
          Login with Microsoft
        </button>
      </div>
    </div>
  );
}

export default Login;
