import styled from 'styled-components';

const NavigationContainer = styled.div`
  	position: absolute; 
  `
const NavigationButton = styled.button`
	background: rgba(63,177,206,0.8);
	border-radius: 20px;
	border-width: 0px;
	font-family: Arial;
	font-size: 20px;
	padding: 15px 25px 15px 25px;
  	transform: translateZ(0);
    transition: transform .25s ease-out;
    &:hover {
    	transform: scale(1.05);
  	}
  	&:hover {
    	transform: scale(.9);
  	}
  `

export {
  NavigationContainer,
  NavigationButton
};