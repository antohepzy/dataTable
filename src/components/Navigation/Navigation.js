import React from 'react';
const Navigation = ({setForm,isSigned}) =>{
	if (isSigned) {
		return(
	<nav className= 'bg-blue' style={{display:'flex',
		justifyContent:'flex-end'}}> 
	<h3 onClick={()=>setForm('sign in')} className='ph3 pointer dim link white ttu bodoni'>Sign Out</h3>
	<h3 onClick={()=>setForm('home')} className='ph3 pointer dim link white ttu bodoni'>Details</h3>
	<h3 onClick={()=>setForm('organise')} className='ph3 pointer dim link white ttu bodoni'>Organise</h3>
	</nav>	);
	}
	else {
		return(
	<nav className= 'bg-blue' style={{display:'flex',justifyContent:'flex-end'}}> 
	<h3 onClick={()=>setForm('sign in')} className='ph3 pointer dim link white ttu bodoni'>Sign In</h3>
	</nav>);
	}

}
export default Navigation;