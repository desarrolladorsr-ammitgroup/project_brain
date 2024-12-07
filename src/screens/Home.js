import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
 
 function Home(){
    return(
        <div>
           <Sidebar/>
           This is Home
        </div>
    )
 }

 export default Home;