import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import { positions,transitions,Provider as AlertProvider } from 'react-alert';

import AlertTemplate from 'react-alert-template-basic';
const options={
   timeout:7000,
   porceosition:positions.BOTTOM_CENTER,
   transitions:transitions.SCALE,
}

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
   <BrowserRouter>
      <AlertProvider template = {AlertTemplate}{...options}> 
          <App/>
      </AlertProvider>
   </BrowserRouter>
</Provider>
    
  
)
