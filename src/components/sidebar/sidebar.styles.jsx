import styled from 'styled-components';

const SidebarContainer = styled.div`
	position: absolute; 
	padding: 2vw;
	top: 0; 
	left: 2vw;
	background: rgba(63,177,206,0.8);
	border-radius: 8px;
	transform: translate3d(0, 0, 0);
	transition: 0.5s ease;
	${({showSidebar}) => showSidebar ? '' : 'transform: translate3d(0, -100%, 0);'};
	@media (min-width: 600px) {
		padding: 1vw;
		left: 0;
		${({showSidebar}) => showSidebar ? '' : 'transform: translate3d(-100%, 0, 0);'};
	}
	@media (min-width: 768px) {
		top: 3vh;
	}
`;

const InputContainer = styled.div`
`;

const StyledInput = styled.input`
	width: 65vw;
	padding: 4px 14px;
	border: 0px;
	border-radius: 8px;
	margin: 0;
	font-size: 18px;
	@media (min-width: 600px) {
		width: 38vw;
		padding: 6px 6px;
		font-size: 18px;
	}
	@media (min-width: 768px) {
		width: 18vw;
		padding: 8px 8px;
		font-size: 18px;
	}
`

const List = styled.ul`
	list-style-type: none;
	padding-inline-start: 1vw;
	color: #BBBBBB;
	font-weight: 500;
	font-size: 18px;
	@media (min-width: 768px) {
		font-size: 18px;
	}
`
const ListItem = styled.li`
	transition: 0.4s;
	cursor: pointer;
	&:hover {
    	color: white;
  	}
`
export {
  SidebarContainer,
  InputContainer,
  StyledInput,
  List,
  ListItem
};