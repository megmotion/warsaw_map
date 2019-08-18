import React, { Component } from 'react';
import Navigation from './components/navigation/navigation.component';
import WarsawMap from './components/map/map.component';
import Sidebar from './components/sidebar/sidebar.component';
import cinemas from './cinemas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cinemas: cinemas
    }
  }
  render() {
    return (
      <div className="App">     
        <WarsawMap cinemas={this.state.cinemas} />
        <Navigation />
        <Sidebar/>
      </div>
    );
  }
}

export default App;
