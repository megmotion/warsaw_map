import React from 'react';

import { SidebarContainer } from './sidebar.styles';

const Sidebar  = (props) => {
	const listItems = props.cinemas.map((cinema) =>
    	<li key={cinema.properties.title}>
	      {cinema.properties.title}
	    </li>
	)

	return(
		<SidebarContainer showSidebar={props.showSidebar}>
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
		</SidebarContainer>
	)
}
export default Sidebar;