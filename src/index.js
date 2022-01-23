import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import BasePage from "./pages/BasePage";

ReactDOM.render(
  <BrowserRouter>
      <BasePage />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
