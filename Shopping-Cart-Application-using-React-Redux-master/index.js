import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./src/components/app";
import store from "./src/store";

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("cart"));