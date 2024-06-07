import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from "axios";

window.axios = axios;
window.axios.defaults.baseURL =
  "https://localhost:7254";
window.axios.defaults.headers.common["Accept"] = "application/json";
window.axios.defaults.headers.common["Content-Type"] = "application/json";
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
