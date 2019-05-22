import React, { Component } from 'react'; 
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Organise from './components/Organise/Organise';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";


const initialState={
  isSigned:false,
  form:'sign in',
  data:[]
};
const column=[
  {
    Header:"FULL NAME",
    accessor:"name"
  },
  {
    Header:"PHONE",
    accessor:"phone",
    sortable:false,
    filterable:false
  },
  {
    Header:"USER NAME",
    accessor:"username"
  },
  {
    Header:"COMPANY NAME",
    accessor:"company.name",
    sortable:false
  }
];

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  setForm = (formName)=>{
    if(formName==='home'){
      this.setState({isSigned:true});
    }
    else if (formName==='sign in'){
      this.setState(initialState);
    }
    this.setState({form:formName});
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users",{
      method:"GET"})
    .then(response=>response.json())
    .then(data=>{
      this.setState({data:data});
    })
  }

   render() {

    return (
      <div>
      <Navigation isSigned={this.state.isSigned}
       setForm={this.setForm}/>
       {(this.state.form === 'sign in')
       ?
      <SignIn setForm={this.setForm} />
      :(this.state.form==='home')
        ?<ReactTable className="mv4" columns={column} 
        data={this.state.data}
        filterable
        filterPlaceholder='Search'
        defaultPageSize={5} />
          :
        <Organise />
      
    }
       </div>
       )
  }
}

export default App;
