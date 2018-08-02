import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Grettings from './components/Grettings';
import SignupPage from './components/signup/SignupPage';
export default(

    <Route path="/" component={App} >

    		<IndexRoute component={Grettings} />
    		<Route path="signup" component={SignupPage}/>
    </Route>
)