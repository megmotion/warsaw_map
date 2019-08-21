import React, { Component } from 'react';
import Navigation from './components/navigation/navigation.component';
import WarsawMap from './components/map/map.component';
import Sidebar from './components/sidebar/sidebar.component';
import cinemas from './cinemas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cinemas: cinemas,
      searchfield: '',
      showSidebar: true,
    }
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      showSidebar: !prevState.showSidebar
    }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { cinemas, searchfield } = this.state
    const filteredCinemas = cinemas.filter(cinema =>{
      return cinema.properties.title.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
      <div className="App">     
        <WarsawMap cinemas={filteredCinemas} />
        <Navigation toggleSidebar={this.toggleSidebar} showSidebar={this.state.showSidebar}/>
        <Sidebar cinemas={filteredCinemas} searchChange={this.onSearchChange} showSidebar={this.state.showSidebar}/>
      </div>
    );
  }
}

export default App;
