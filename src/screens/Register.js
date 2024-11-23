import React from 'react';
import { Link } from "react-router-dom";


function Register(){
    return(
        <div> 
            Register
            <Link to={"/"}>
          <button>
            Click here to go back to Login
          </button>
            </Link>
        </div>
    )
}
export default Register;