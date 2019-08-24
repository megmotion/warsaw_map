import React from 'react';

import { SidebarContainer, InputContainer, StyledInput, List, ListItem} from './sidebar.styles';

const Sidebar  = ({ cinemas, mouseEnter, mouseLeave, showSidebar, searchChange }) => {
	const listItems = cinemas.map((cinema) =>
    	<ListItem 
    		key={cinema.properties.title}
    		onMouseEnter={mouseEnter} 
          	onMouseLeave={mouseLeave}>
	      {cinema.properties.title}
	    </ListItem>
	)

	return(
		<SidebarContainer showSidebar={showSidebar}>	
			<InputContainer>
				<StyledInput
			        type='search'
			        placeholder='Filter cinemas'
			        onChange={searchChange}
			      />
			</InputContainer>
			<List>{listItems}</List>		
		</SidebarContainer>
	)
}
export default Sidebar;