import React from 'react';

import { NavigationContainer, NavigationButton } from './navigation.styles';

const Navigation  = (props) => {
	return(
		<NavigationContainer>
			<NavigationButton onClick={props.toggleSidebar}>☰</NavigationButton>
		</NavigationContainer>
	)
}
export default Navigation;