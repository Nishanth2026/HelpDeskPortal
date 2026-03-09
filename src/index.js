import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import './index.css';
import App from './App.jsx';

const msalInstance = new PublicClientApplication(msalConfig);

function renderApp() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MsalProvider>
    </React.StrictMode>
  );
}

msalInstance.initialize().then(() => {
  renderApp();
}).catch((error) => {
  console.error('MSAL initialization failed:', error);
  renderApp();
});
