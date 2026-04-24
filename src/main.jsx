// Primeiro ficheiro a ser executado - liga o React ao HTML e importa todos os estilos

import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'

import App from './App.jsx'

// aponta para <div id="root"> no index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)