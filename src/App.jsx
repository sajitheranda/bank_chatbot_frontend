import './App.css';
import React from 'react';
import Navigationbar from './pages/navigationbar/Navigationbar';
import Home from'./pages/home/Home'
import Detail from'./pages/details/Detail'
import Chat from './pages/chat/Chat';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Home/>
      <Detail/>
      <Chat/>
    </div>
  );
}

export default App;
