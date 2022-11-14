import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-yn2dkswhrfnkrurk.us.auth0.com"
    clientId="PBKkUjuFHTLV2aaDigXGbgfsht2aRZ1S"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
