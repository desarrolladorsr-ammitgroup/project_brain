import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
 
 function Home(){
    return(
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div className='content' style={{display:'flex', flexDirection:'column', margin:'3%'}}>
         
         
         
         
         <h1>Home</h1>
         <div className='shadow p-3 mb-5 bg-white rounded'>

         </div>
         
      </div>



   </div>
    )
 }

 export default Home;