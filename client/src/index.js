import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";

// axios.defaults.baseURL = "https://rickandmorty-yoni.onrender.com"
// axios.defaults.baseURL = "http://localhost:3001/"
axios.defaults.baseURL = "https://rickandmorty-production.up.railway.app/"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
