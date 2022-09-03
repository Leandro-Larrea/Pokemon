import React from "react";
import ReactDOM  from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { provider } from  "react-redux"

 ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById("root"))

// Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.