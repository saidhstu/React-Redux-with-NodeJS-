import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import {Router, browserHistory} from 'react-router';

class  SignupForm extends React.Component{

  constructor(props){

    super(props);
    this.state={
      username: '',
      email:'',
      password:'',
      passwordConfirmation:'',
      timezone:'',
      errors: {},
      isLoading:false
  }
   this.onChange=this.onChange.bind(this);
   this.onSubmit=this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
isValid(){
  const {errors, isValid} = validateInput(this.state);
  if(!isValid){
    this.setState({errors});
  }
  return isValid;
}
  onSubmit(e){
    e.preventDefault();

    if(this.isValid()){
    this.setState({errors:{},isLoading:true});
    
    this.props.userSignupRequest(this.state).then(
      ()=>{
        this.props.addFlashMessage({
          type: 'success',
          text: 'You have successfully Registered!!!'
        })
        this.context.router.push('/')
      },
      ({response})=>this.setState({errors:response.data, isLoading:false})
      
      
    );
  }
}
  render(){
    const {errors}=this.state;
    const options=map(timezones, (val,key)=>

      <option key={val} value={val}>{key} </option>
    ); 
    return(
      <form onSubmit={this.onSubmit}>
         <h1> Register</h1>
            
            <TextFieldGroup
              error={errors.username}
              label="Username"
              onChange={this.onChange}
              value={this.state.username}
              field="username"
            />

        
                 
            <TextFieldGroup
              error={errors.email}
              label="Email"
              onChange={this.onChange}
              value={this.state.email}
              field="email"
            />
       
           

             <TextFieldGroup
              error={errors.password}
              label="Password"
              onChange={this.onChange}
              value={this.state.password}
              field="password"
            />

      
            <TextFieldGroup
              error={errors.passwordConfirmation}
              label="Confirm Password"
              onChange={this.onChange}
              value={this.state.passwordConfirmation}
              field="passwordConfirmation"
            />

            <div className={classnames("form-group",{'has-error':errors.timezone})}>
              <label className="control-label">Timezone</label>
              <select 
                   
                   value={this.state.timezone}
                   onChange={this.onChange}
                   className="form-control" 
                   name="timezone" 
                   
                   >
                   <option value="" disabled>Choose Your Timezone</option>
                   {options}
               </select>
               {errors.timezone && <span className="help-block">{errors.timezone}</span>}

            </div>
       

             <div className="form-group">
               <button disabled={this.state.isLoading} className="btn btn-success">Sign Up</button>
             </div>

      </form>
        
     
    );
}
}

SignupForm.PropTypes={
userSignupRequest:PropTypes.func.isRequired ,
addFlashMessage:PropTypes.func.isRequired
}

SignupForm.contextTypes={
  router:PropTypes.object.isRequired
}
export default SignupForm;