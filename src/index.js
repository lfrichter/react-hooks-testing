import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './views/App'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
