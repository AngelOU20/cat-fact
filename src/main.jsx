// ? Si no cambiamos js a jsx, no seria capas de transpilar el código
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { AppMidu } from './AppMidu';

const root = createRoot(document.getElementById('app'));

root.render(
  // <React.StrictMode>
  <AppMidu />
  // </React.StrictMode>
);
