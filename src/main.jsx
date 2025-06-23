import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from "react-router";
import Router from './routes/Router.jsx';

import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <BrowserRouter>
        <Router />
        <ToastContainer position="top-center" autoClose={4000} />
      </BrowserRouter>
   
  </StrictMode>
);
