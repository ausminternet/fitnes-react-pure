import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'))
// registerServiceWorker()
// setInterval(() => {
//   var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
//   var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
//   document.getElementById('root').innerHTML = `width: ${w}, height: ${h}`
// }, 100)
