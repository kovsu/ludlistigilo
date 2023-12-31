import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
