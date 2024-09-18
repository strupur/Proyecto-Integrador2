import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import OrderProvider from './context/OrderContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // JS de Bootstrap

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>

      <OrderProvider>

        <App />

      </OrderProvider>

    </BrowserRouter>
  </StrictMode>,
)
