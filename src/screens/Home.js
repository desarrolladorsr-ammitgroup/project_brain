import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

 
 function Home(){
    return(
        <div>
            <Link to={'/'}>
            <button className='btn btn-danger'>
                click here to log out 
            </button>
            </Link>
            Home
        </div>
    )
 }

 export default Home;