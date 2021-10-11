import React from "react";
import {Link} from 'react-router-dom';
import logo  from '../../img/logo.png';


function Home(){
  return(
      <div className="home">
        <div class="mainContainer">
          <div class="mainContainer1">
            <img src={logo} width="500" />
          </div>
          <div class="mainContainer2">
            <h7>GroupGator</h7><br></br>
            <h8>find them!</h8><br></br>
            <br></br>
            <Link to= '/SignIn' class="bSignIn">Sign In</Link>&nbsp; 
            <Link to= '/Login' class="bLogin">Login</Link>
            
          </div>   

        </div>
          
      </div>
  )

}

export default Home;