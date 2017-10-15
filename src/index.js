import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'akwa-themes/dist/css/fitness.css'
import 'akwa-themes/dist/js/fitness.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
