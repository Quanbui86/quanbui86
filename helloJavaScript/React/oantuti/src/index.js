import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

/*ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);*/
