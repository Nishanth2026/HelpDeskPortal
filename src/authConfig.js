/**
 * MSAL configuration for Microsoft Entra ID (Azure AD) authentication.
 * Replace the placeholder values with your app registration details from the Azure portal.
 * In the app registration, set the redirect URI (e.g. http://localhost:3000/login for dev).
 */

/** Application (client) ID from Azure app registration */
export const clientId = process.env.REACT_APP_MSAL_CLIENT_ID || '1dfe8685-3bb4-4a26-9579-6b874a6dd680';

/** Directory (tenant) ID from Azure app registration */
export const tenantId = process.env.REACT_APP_MSAL_TENANT_ID || '13fcc499-9fb6-4786-9486-94a34424328c';

/** URI to which the identity provider redirects after authentication. Use /login so the app can redirect to /main. */
export const redirectUri =
  process.env.REACT_APP_MSAL_REDIRECT_URI ||
  (typeof window !== 'undefined' ? `${window.location.origin}/login` : 'https://helpdeskportal-gee6gua8a0ehcaad.southindia-01.azurewebsites.net');

export const msalConfig = {
  auth: {
    clientId,
    authority: process.env.REACT_APP_MSAL_AUTHORITY || `https://login.microsoftonline.com/${tenantId}`,
    redirectUri,
    postLogoutRedirectUri:
      process.env.REACT_APP_MSAL_POST_LOGOUT_REDIRECT_URI || redirectUri,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 */
export const loginRequest = {
  scopes: ['User.Read', 'openid', 'profile'],
};
