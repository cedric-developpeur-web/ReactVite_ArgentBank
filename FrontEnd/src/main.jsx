import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './scss/style.scss';
// import de redux
import { Provider } from 'react-redux';
import storage from './component/redux/storage.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storage}>
      <App />
    </Provider>
  </React.StrictMode>,
)
