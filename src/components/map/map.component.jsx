import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class WarsawMap extends React.Component {
	componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [21, 52.25],
      zoom: 12
    });
  }
  componentWillUnmount() {
    this.map.remove();
  }
  render() {
    return (
    	<div>
    		<div style={{position:'absolute', top:0, bottom:0, width:'100%'}} ref={el => this.mapContainer = el} />
    	</div>
    );
  }
}
export default WarsawMap;