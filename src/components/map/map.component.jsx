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
   			let description = `
   				<strong>${cinema.properties.title}</strong><br> 
   				${cinema.properties.description}<br>
   				<strong>${cinema.properties.email}</strong>
   			`;
   			let popup = new mapboxgl.Popup().setHTML(description)
			let marker = new mapboxgl.Marker()
			.setLngLat(cinema.geometry.coordinates)
			.setPopup(popup)
			.addTo(this.warsawMap);
			cinema.marker=marker
		});   
	} 
	componentDidUpdate(prevProps){
		prevProps.cinemas.forEach(cinema => {
    		cinema.marker.remove()
		})
		this.props.cinemas.forEach(cinema => {
			let description = `
   				<strong>${cinema.properties.title}</strong><br> 
   				${cinema.properties.description}<br>
   				<strong>${cinema.properties.email}</strong>
   			`;
   			let popup = new mapboxgl.Popup().setHTML(description)
			let marker = new mapboxgl.Marker()
			.setLngLat(cinema.geometry.coordinates)
			.setPopup(popup)
			.addTo(this.warsawMap);
			cinema.marker=marker
		});

		this.props.cinemas.forEach(cinema => {
			if (cinema.properties.title === this.props.hoveredItem) {
				cinema.marker.togglePopup();
			}
		})
	} 

	render() {
		return (<div style={{position:'absolute', top:0, bottom:0, width:'100%'}} ref={el => this.mapContainer = el} />	);
	}
}
export default WarsawMap;