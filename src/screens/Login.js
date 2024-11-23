import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
    return(
        <div>
         Login   
         <Link to={"/home"}>
         <button className='btn btn-primary'>
            Click here to Login
         </button>
         </Link>
         Register
         <Link to={"/register"}>
         <button className='btn btn-dark'>
            Click here to Register 
         </button>
         </Link>

         
        </div>
        

    )
}
export default Login; 