import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { SearchProvider } from "./context/SearchContext.tsx";

// <!-- Bootstrap -->
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')!).render(
  <SearchProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </SearchProvider>,
)
