import React from 'react';
import ReactDOM from 'react-dom';

import Root from './pages/Root/Root';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
      <Root />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
