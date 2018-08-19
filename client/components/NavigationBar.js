import React from 'react';
import {Link} from 'react-router';
export default()=>{
    return(
           <div className="container">


                    

                        <nav className="navbar navbar-default">
                          <div className="container-fluid">
                            <div className="navbar-header">
                              <div className="navbar-brand"> <Link to="/">WebSiteName</Link></div>
                            </div>
                            <ul className="nav navbar-nav">
                              <li ><a href="#">Home</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Projects</a></li>
                              <li><a href="#">Languages</a></li>
                              <li><a href="#">Protfolio</a></li>
                              <li><a href="#">Contuct Us</a></li>
                            </ul>

                            <div >
                               <ul className="nav navbar-nav navbar-right">
                                <li className="nav navbar-nav"> <Link to="/signup">Sign Up</Link></li>
                                <li className="nav navbar-nav"> <Link to="/login">Login</Link></li>
                               </ul>
                           </div>

                          </div>
                         
                        </nav>

            </div>
        
     
    );
}

 