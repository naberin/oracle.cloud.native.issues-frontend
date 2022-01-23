import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import MainPage from "./pages/MainPage";

ReactDOM.render(
  <BrowserRouter>
      <MainPage />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
