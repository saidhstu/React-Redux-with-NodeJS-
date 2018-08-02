import React from 'react';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';
class  SignupPage extends React.Component{
  render(){
      const {userSignupRequest, addFlashMessage}=this.props;

    return(

    
       <div className="container">
      
        <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <SignupForm  userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
              </div>
        </div>
     </div>
        
     
    );
}
}
 

SignupPage.PropTypes={
userSignupRequest:PropTypes.func.isRequired,
addFlashMessage:PropTypes.func.isRequired 
}

export default connect(null,{userSignupRequest, addFlashMessage}) (SignupPage);

//for checking data ....>export default connect((state)=>{return {}},{userSignupRequest}) (SignupPage);