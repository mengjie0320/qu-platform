import { log } from './utils'
log("You didi it")
import React from "react"; // 必须有
// import ReactDom from "react-dom";
// import App from "./app";
import Game from './views/square/game'

// ReactDom.render( <App/> , document.getElementById("root"));

import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
const root = createRoot(
    document.getElementById('app') as HTMLElement
);
root.render(
    <React.StrictMode>
        {/* <App/> */}
        <Game />
    </React.StrictMode>
);