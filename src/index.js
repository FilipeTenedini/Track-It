import React from 'react';
import ReactDOM from 'react-dom/client';
import { ResetCss} from "./style/ResetCss";
import { GlobalStyle } from "./style/GlobalStyle";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCss />
    <GlobalStyle />

      <App />

  </React.StrictMode>
);