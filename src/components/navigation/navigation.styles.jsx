import styled from 'styled-components';

const NavigationContainer = styled.div`
  	position: absolute;
    width:6vw;
  	top: 1vw;
  	right: 2.5vw;
   	transform: translate3d(0, 0, 0)
  	transition: 0.5s ease;
  	${({showSidebar}) => showSidebar ? '' : 'transform: translate3d(0, 0, 0);'};
    @media (min-width: 600px) {
      top: 4vw;
      left: 40vw; 
      ${({showSidebar}) => showSidebar ? '' : 'transform: translate3d(-40vw, 0, 0);'};
    }
    @media (min-width: 768px) {
      left: 20vw; 
      ${({showSidebar}) => showSidebar ? '' : 'transform: translate3d(-20vw, 0, 0);'};
    }

  `
const NavigationButton = styled.button`
	background: rgba(63,177,206,0.8);
	border-radius: 10px;
	border-width: 0px;
	color: #BBBBBB;
	font-size: 24px;
	padding: 6px 12px;
	transform: translateZ(0);
  transition: transform .2s ease-out;
	&:hover {
  	transform: scale(.9);
  	color: white;
	}
  cursor: pointer;
  @media (min-width: 600px) {
      font-size: 16px;
    }
  @media (min-width: 768px) {
      border-radius: 20px;
      font-size: 22px;
      padding: 10px 20px;
    }
`

export {
  NavigationContainer,
  NavigationButton
};