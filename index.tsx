import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Rotate from "./Rotate";
import Adjust from "./Adjust";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <StrictMode>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="rotate" element={<Rotate />} />
      <Route path="adjust" element={<Adjust />} />
  </Routes>
  
  </StrictMode>
  </BrowserRouter>,
);


