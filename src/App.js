import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
    <Header />
      {/* App Body */}
      <div className="app-body">
        <Sidebar />
        <Feed />
        < Widgets />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;