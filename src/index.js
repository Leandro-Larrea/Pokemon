import React from "react";
import ReactDOM  from "react-dom";
import * as ReactDOMClient from "react-dom/client"
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from  "react-redux"
import store from './redux/store/index.js';

const container = document.getElementById('root');
//  ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     </Provider>
//     ,document.getElementById("root"))

const root = ReactDOMClient.createRoot(container);
root.render(
<Provider store={store}>
         <BrowserRouter>
             <App/>
         </BrowserRouter>
     </Provider>
);

// Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.