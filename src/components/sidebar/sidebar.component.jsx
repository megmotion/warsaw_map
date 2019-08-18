import React from 'react';

const Sidebar  = (props) => {
	const listItems = props.cinemas.map((cinema) =>
    	<li key={cinema.properties.title}>
	      {cinema.properties.title}
	    </li>
	)

	return(
		<div style={{position:'absolute', top:70, background:'grey'}}>
			<div>
				<div>
					<input
				        type='search'
				        placeholder='filter cinemas'
				        onChange={props.searchChange}
				      />
				</div>
				<div>
					<ul>{listItems}</ul>
				</div>
			</div>
		</div>
	)
}
export default Sidebar;