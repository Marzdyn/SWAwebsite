import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './largeScreen.css'
import "./mobile.css"
import "./tablet.css"
import "./smallScreen.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
