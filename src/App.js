import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyDataComponent from './components/MyDataComponent';

function App() {
  return (
    <div className="App">
        <MyComponent name="ahmet emre" >this is my children</MyComponent>
        <MyComponent name="hasan" >this is your children</MyComponent>
        <MyDataComponent></MyDataComponent>
    </div>
  );
}

export default App;
