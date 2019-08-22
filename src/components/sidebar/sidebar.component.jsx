import React from 'react';

import { SidebarContainer, InputContainer, StyledInput, List, ListItem} from './sidebar.styles';

const Sidebar  = (props) => {
	const listItems = props.cinemas.map((cinema) =>
    	<ListItem 
    		key={cinema.properties.title}
    		onMouseEnter={props.mouseEnter} 
          	onMouseLeave={props.mouseLeave}>
	      {cinema.properties.title}
	    </ListItem>
	)

	return(
		<SidebarContainer showSidebar={props.showSidebar}>	
			<InputContainer>
				<StyledInput
			        type='search'
			        placeholder='filter cinemas'
			        onChange={props.searchChange}
			      />
			</InputContainer>
			<List>{listItems}</List>		
		</SidebarContainer>
	)
}
export default Sidebar;