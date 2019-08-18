import styled from 'styled-components';

export const SidebarContainer = styled.div`
	position: absolute; 
	top:70px; 
	background:grey;
	${({showSidebar}) => showSidebar ? '' : 'display: none'};
	
`;
