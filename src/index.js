import React from "react";
import reactDom from "react-dom";
import App from './components/App/App'


reactDom.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
   document.getElementById('root')
)
