import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {InfoProvider} from './components/pages/Context'

import App from './App';

ReactDOM.render(
 <InfoProvider>
 <Router>
     <App />
 </Router>
 </InfoProvider>,document.getElementById('root')
 
);


