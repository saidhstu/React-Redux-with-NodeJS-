import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/login';
import classnames from 'classnames';
import {Router, browserHistory} from 'react-router';


class LoginForm extends React.Component{

	  constructor(props){

    super(props);
    this.state={
	    usermail:'',
		password:'',
		errors:{},
		isLoading:false
     
  };
   this.onChange=this.onChange.bind(this);
   this.onSubmit=this.onSubmit.bind(this);
   
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
			this.setState({errors:{}, isLoading:true});
			this.props.login(this.state).then(
				(res)=>this.context.router.push('/'),
				(err)=>this.setState({errors:err.response.data.errors, isLoading:false})
				 
				)
		}

	}
	onChange(e){
		this.setState({[e.target.name]:e.target.value});

	}


	render(){
		const {errors, usermail, password, isLoading}= this.state;
		return(
			<form onSubmit={this.onSubmit}>
				<h1>Login</h1>
				
				
				
					 <div className="alert alert-danger"></div>
				<TextFieldGroup

					field="usermail"
					label="UserName or Email"
					value={usermail}
					error={errors.usermail}
					onChange={this.onChange}
 
				/>

				<TextFieldGroup

					field="password"
					label="Password"
					value={password}
					error={errors.password}
					onChange={this.onChange}
					type="password"

				/>

				<div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>

			</form>
			)
	}
}
LoginForm.PropTypes={

 login:PropTypes.func.isRequired
 
}
LoginForm.contextTypes={
	router:PropTypes.object.isRequired
  }
export default connect(null, {login}) (LoginForm);