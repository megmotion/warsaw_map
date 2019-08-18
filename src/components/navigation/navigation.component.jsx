import React from 'react';

const Navigation  = (props) => {
	return(
		<div style={{position:'absolute', background:'grey'}}>
			<button onClick={props.toggleSidebar}>☰</button>
		</div>
	)
}
export default Navigation;