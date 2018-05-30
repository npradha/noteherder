import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Router>
     <Route component={App} />
    </Router>, 
    document.getElementById('root'))
registerServiceWorker()
