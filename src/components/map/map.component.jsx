import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

class WarsawMap extends React.Component {
	    
	componentDidMount() {
		this.warsawMap = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/dark-v9',
			center: [21, 52.25],
			zoom: 12
    	});

    	this.props.cinemas.forEach(cinema => {
			let marker = new mapboxgl.Marker()
			.setLngLat(cinema.geometry.coordinates)
			.addTo(this.warsawMap);
			cinema.marker=marker
		});
	}

	componentDidUpdate(prevProps){
		prevProps.cinemas.forEach(cinema => {
    		cinema.marker.remove()
		})

		this.props.cinemas.forEach(cinema => {
			let marker = new mapboxgl.Marker()
			.setLngLat(cinema.geometry.coordinates)
			.addTo(this.warsawMap);
			cinema.marker=marker
		});
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