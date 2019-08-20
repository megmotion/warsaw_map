import React from 'react';

import { NavigationContainer, NavigationButton } from './navigation.styles';

const Navigation  = (props) => {
	return(
		<NavigationContainer showSidebar={props.showSidebar}>
			<NavigationButton onClick={props.toggleSidebar}>☰</NavigationButton>
		</NavigationContainer>
	)
}
export default Navigation;