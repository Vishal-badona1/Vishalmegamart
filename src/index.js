import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './User/Redux/feature/store';
import { BrowserRouter } from 'react-router-dom';
// import Store from './Admin/Redux/Feature/store';
import {Auth0Provider} from "@auth0/auth0-react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <BrowserRouter>
  <Auth0Provider
  //Netlify Credentials
    // domain="dev-ncvxpuvaouhtodwv.us.auth0.com"
    // clientId="IL1Ej4boz3KvYfLg9r7miZOYfkehdckq"

    //Lpcalhost Credentials
    domain="dev-ncvxpuvaouhtodwv.us.auth0.com"
    clientId="IpwJRtWYrixFVIbK8uhlOU7k5NFhmrQL"
    redirectUri={window.location.origin}
  >
<App />
</Auth0Provider>
  </BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
