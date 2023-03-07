import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/context/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
<BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
</AuthProvider>
);
