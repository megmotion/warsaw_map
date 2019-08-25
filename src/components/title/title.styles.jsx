import styled from 'styled-components';

const TitleContainer=styled.div`
	top: 0vw;
	left: 1vw;
	position: absolute; 
	color: rgba(63,177,206,0.8);
	font-family: 'Meddon', cursive;
	@media (min-width: 600px) {
		font-size: 2vw;
	}
`
const Header = styled.h1`
	margin: 0;
	font-size: 4vw;
	@media (min-width: 600px) {
	font-size: 2vw;
	}
`

export {
	TitleContainer,
	Header
}