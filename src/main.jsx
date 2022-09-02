import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MarvelPage } from './Marvel/router/MarvelPage'
import  "./App.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MarvelPage/>
    </BrowserRouter>
  </React.StrictMode>
)
