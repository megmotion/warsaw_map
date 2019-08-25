import React, { Component } from 'react';
import Navigation from './components/navigation/navigation.component';
import Title from './components/title/title.component';
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
      hoveredItem: '',
    }
  }

  onMouseEnter = (e) => {
    this.setState({ isHovered: true });
    this.setState({ hoveredItem: e.target.innerHTML });
  }

  onMouseLeave = (e) => {
    this.setState({ hoveredItem: '' });
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
    const { cinemas, searchfield, isHovered, hoveredItem, showSidebar } = this.state
    const filteredCinemas = cinemas.filter(cinema =>{
      return cinema.properties.title.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
      <div className="App">     
        <WarsawMap 
          cinemas={filteredCinemas} 
          isHovered={isHovered}
          hoveredItem={hoveredItem} />
        <Title/>
        <Navigation 
          toggleSidebar={this.toggleSidebar} 
          showSidebar={showSidebar}/>
        <Sidebar 
          cinemas={filteredCinemas} 
          searchChange={this.onSearchChange} 
          showSidebar={showSidebar} 
          mouseEnter={this.onMouseEnter} 
          mouseLeave={this.onMouseLeave}/>
      </div>
    );
  }
}

export default App;
