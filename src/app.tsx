import React from "react";
import './App.css';

const xmlData = require('./foo.xml');
console.log('xmlData.note.body', xmlData.note.body)

const App = () => {
    return <h1> Hello React 55</h1>;
};

export default App;