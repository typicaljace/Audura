import React, { useState } from 'react';
import './App.css';
import { Sidebar, MainContent, Player } from './components';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        
        {/* Main Content */}
        <MainContent activeSection={activeSection} />
      </div>
      
      {/* Player */}
      <Player />
    </div>
  );
}

export default App;