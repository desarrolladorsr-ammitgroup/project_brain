import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
    return(
        <div>
         Login    
         <Link to={"/home"}>
         <button className='btn btn-primary'>
             Login
         </button>
         </Link>
         Register
         <Link to={"/register"}>
         <button className='btn btn-dark'>
             Register 
         </button>
         </Link>
         
         
        </div>
        

    )
}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>


export default Login; 