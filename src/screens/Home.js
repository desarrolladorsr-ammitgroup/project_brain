import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
 
 function Home(){
    return(
      <div style={{ display: 'flex', flexDirection: 'row' }}>
         <Sidebar/>
         <div className='content'>
           <h1>This is Home</h1>
           </div>
        </div>
    )
 }

 export default Home;