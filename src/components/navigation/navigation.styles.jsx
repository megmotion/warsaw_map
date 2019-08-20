import styled from 'styled-components';

const NavigationContainer = styled.div`
  	position: absolute;
  	top: 5vh;
  	left: 17vw; 
 	transform: translate3d(0, 0, 0)
	transition: 0.5s ease;
	${({showSidebar}) => showSidebar ? '' : 'transform: translate3d(-17vw, 0, 0);'};

  `
const NavigationButton = styled.button`
	background: rgba(63,177,206,0.8);
	border-radius: 20px;
	border-width: 0px;
	color: #BBBBBB;
	font-size: 28px;
	padding: 10px 20px 10px 20px;
  	transform: translateZ(0);
    transition: transform .2s ease-out;
  	&:hover {
    	transform: scale(.9);
    	color: white;
  	}
  `

export {
  NavigationContainer,
  NavigationButton
};