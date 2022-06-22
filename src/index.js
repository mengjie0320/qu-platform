import { log } from './utils/log'
log("You didi it")
import React from "react"; // 必须有
// import ReactDom from "react-dom";
import App from "./app";

// ReactDom.render( <App/> , document.getElementById("root"));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
root.render(<App/>);