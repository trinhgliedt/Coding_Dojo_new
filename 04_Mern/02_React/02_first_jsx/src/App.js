import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App text-left">
      <h1>Hello Dojo!</h1>
      {}
      
      <ToDoList someProp="someValue" />
    </div>
  );
}

export default App;
