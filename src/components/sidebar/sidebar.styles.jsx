import styled from 'styled-components';

const SidebarContainer = styled.div`
	position: absolute; 
	top:10%; 
	background:rgba(63,177,206,0.8);
	border-radius: 8px;
	transform: translate3d(0, 0, 0);
	transition: 0.5s ease;
	${({showSidebar}) => showSidebar ? '' : 'transform: translate3d(-100%, 0, 0);'};
`;

const InputContainer = styled.div`
	padding: 16px 20px;

`;

const StyledInput = styled.input`
	width: 100%;
	padding: 10px 16px;
	border-width: 1px;
	border-style: solid;
	border-color: white;
	border-radius: 8px;
	margin: 0;
	font-size: 20px;
`
const List = styled.ul`
	list-style-type: none;
	padding-inline-start: 30px;
	padding-bottom:10px;
	margin-top:5px;
	color: #BBBBBB;
	font-weight: 500;
	font-size: 20px;
`
const ListItem = styled.li`
	transition: 0.4s;
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