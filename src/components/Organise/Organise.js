import React from 'react';
import DualListbox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import List from './list.json';
import { IoIosArrowDropleftCircle,IoIosFastforward,IoIosArrowDroprightCircle,IoIosRewind }from 'react-icons/io';
import { IconContext } from "react-icons";

 



class Organise extends React.Component{
  constructor(){
    super();
    this.state={
      selected:[]
    }
  }

  render(){
  	return(
  		<div className="mv4">
     
  		<DualListbox
  		options={List}
  		selected={this.state.selected}
  		onChange={(selected)=>{
  			this.setState({selected});

  		}}

  		canFilter
  		filterPlaceholder='Search Permissions'

  		icons={{
        moveLeft: <IconContext.Provider value={{ color: "blue", size:"3em", className: "global-class-name" }}>
        <IoIosArrowDropleftCircle /> 
     </IconContext.Provider>,
 		moveRight: <IconContext.Provider value={{ color: "blue", size:"3em", className: "global-class-name" }}>
 		<IoIosArrowDroprightCircle />
 		</IconContext.Provider>,
 		moveAllLeft:<IoIosRewind/>,
 		moveAllRight:<IoIosFastforward/>}}

  		/>

  		</div>
  		);
  }

}

export default Organise;