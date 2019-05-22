import React from 'react';
import User from './user.json';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state={
      signInName:'',
      signInPassword:''
    }
  }
  onNameChange=(event)=>{
    this.setState({signInName:event.target.value});
  }
  onPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value});
  }
  onSignIn = () =>{
    let validUser=false;
    User.forEach((user) => {
      
      if(user.username===this.state.signInName && user.password===this.state.signInPassword){
        validUser= true;
      }
      });
    if(validUser){
      
      this.props.setForm('home');
    }
  }
  
  render(){
    
    return(
    <article className="mw6 center br3 pa2-ns mv6 ba b--white-20 shadow-3">
  <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f5 fw6 tc ph0 mh0 center ttu">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 " htmlFor="email-address">User Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 " 
        type="email" 
        name="email-address"  
        id="email-address"
        onChange={this.onNameChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 " 
        type="password" 
        name="password"  
        id="password"
        onChange={this.onPasswordChange}/>
      </div>
    </fieldset>
    <div className="center">
      <input 
      className="b ph3 pv2 input-reset ba  bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Sign in"
      onClick={this.onSignIn}/>
    </div>
    
  </div>
</main>
</article>

);
  }
}
export default SignIn;