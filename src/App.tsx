import React from "react";
import './App.css';
import { Stars } from './components/Stars';

function App() {
  return (
    <div className="block">
      <Stars count={3}/>
    </div>
  );
}

export default App;
