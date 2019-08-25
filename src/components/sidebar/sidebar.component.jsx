import React from 'react';

import { SidebarContainer, SidebarBox, InputContainer, StyledInput, List, ListItem} from './sidebar.styles';

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
			<SidebarBox>
				<InputContainer>
					<StyledInput
				        type='search'
				        placeholder='Filter cinemas'
				        onChange={searchChange}
				      />
				</InputContainer>
				<List>{listItems}</List>
			</SidebarBox>		
		</SidebarContainer>
	)
}
export default Sidebar;