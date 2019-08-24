import React from 'react';

import { NavigationContainer, NavigationButton } from './navigation.styles';

const Navigation = ({showSidebar, toggleSidebar}) => {
	return (
		<NavigationContainer showSidebar={showSidebar}>
			<NavigationButton onClick={toggleSidebar}>☰</NavigationButton>
		</NavigationContainer>
	)
}
export default Navigation;