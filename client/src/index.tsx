import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import App from './App';
import QueryClientProvider from './modules/common/components/QueryClientProvider';
import { makeServer } from './__mocks__/server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
