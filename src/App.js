import './App.css';
import './style.css';

import React,{useState}from 'react'
function App() {
  const [data,setData]=useState("Governor House")
  return (
    <div className="App">
      <h1 className='h'>Hooks in React {data}</h1>
      <button className='b'onClick={()=>setData("saturday slots: 2 to 5 pm")}>Update State</button>
    </div>
  );
}

export default App;