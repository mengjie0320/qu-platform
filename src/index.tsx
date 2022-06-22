import React from 'react';
import ReactDOM from "react-dom/client";
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css'; 

const root = ReactDOM.createRoot(
  document.getElementById("app")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();


// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// // import your route components too
// import SquareGame from './pages/squareGame/index'
// import Calendar from './pages/calendar/index'
// import App from './app'

// const root = ReactDOM.createRoot(
//   document.getElementById("app")
// );
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         {/* <Route index element={< />} />
//         <Route path="teams" element={<Teams />}>
//           <Route path=":teamId" element={<Team />} />
//           <Route path="new" element={<NewTeamForm />} />
//           <Route index element={<LeagueStandings />} />
//         </Route> */}
//         <Route index element={<SquareGame />} />
//         <Route path="calendar" element={<Calendar />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );


// log("You didi it")
// import { BrowserRouter as Router } from 'react-router-dom';
// import React from "react"; // 必须有
// // import ReactDom from "react-dom";
// import App from "./app";
// // import Game from './views/square/game'

// // ReactDom.render( <App/> , document.getElementById("root"));

// import { createRoot } from 'react-dom/client';
// // const container = document.getElementById('app');
// const root = createRoot(
//     document.getElementById('app') as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <Router>
//             <App/>
//         </Router>
//     </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { connect, Provider } from 'react-redux';
// import { ConfigProvider } from 'antd';
// import zhCN from 'antd/es/locale/zh_CN';
// import App from './App';
// import './index.scss';
// import store from './store';
// import 'antd/dist/antd.css';

// const WrapApp = connect((state) => state)(App);

// ReactDOM.render(
//   <Provider store={store}>
//     <ConfigProvider locale={zhCN}>
//       <WrapApp />
//     </ConfigProvider>
//   </Provider>,
//   document.getElementById('react-body'),
// );
