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

   /* 	this.props.cinemas.forEach(cinema => {
			let marker = new mapboxgl.Marker()
			.setLngLat(cinema.geometry.coordinates)
			.addTo(this.warsawMap);
			cinema.marker=marker
		});*/

		this.warsawMap.on("load", () => {
			this.warsawMap.addLayer({
				"id": "places",
				"type": "symbol",
				"layout": {
					"icon-image": "cinema" + "-15",
					"icon-size": 2,
					"icon-allow-overlap": true
					},
			  
				"source": {
					"type": "geojson",
					"data": {
						"type": "FeatureCollection",
						"features": this.props.cinemas
					}
				},
			})
	    })

		// Create a popup
	    var popup = new mapboxgl.Popup({
			closeButton: false,
			closeOnClick: false
		});		

		this.warsawMap.on('mouseenter', 'places', (e) => {
			// Change the cursor style as a UI indicator
			this.warsawMap.getCanvas().style.cursor = 'pointer';
			 
			var coordinates = e.features[0].geometry.coordinates.slice();
			var description = e.features[0].properties.description;
			 
			// Ensure that if the map is zoomed out such that multiple
			// copies of the feature are visible, the popup appears
			// over the copy being pointed to.
			while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
			}
			 
			// Populate the popup and set its coordinates
			// based on the feature found.
			popup.setLngLat(coordinates)
			.setHTML(description)
			.addTo(this.warsawMap);
		});
		 
		this.warsawMap.on('mouseleave', 'places', () => {
			this.warsawMap.getCanvas().style.cursor = '';
			popup.remove();
		});
	} 

/*	componentDidUpdate(prevProps){
		prevProps.cinemas.forEach(cinema => {
    		cinema.marker.remove()
		})

		this.props.cinemas.forEach(cinema => {
			let marker = new mapboxgl.Marker()
			.setLngLat(cinema.geometry.coordinates)
			.addTo(this.warsawMap);
			cinema.marker=marker
		});
	}*/
  
	render() {
		return (
			<div>
				<div style={{position:'absolute', top:0, bottom:0, width:'100%'}} ref={el => this.mapContainer = el} />
			</div>
		);
	}
}
export default WarsawMap;