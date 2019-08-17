import React from 'react';
import Navigation from './components/navigation/navigation.component';
import WarsawMap from './components/map/map.component';
import Sidebar from './components/sidebar/sidebar.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Sidebar />
      <WarsawMap />
    </div>
  );
}

export default App;
