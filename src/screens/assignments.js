import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
function Assignments() {
   return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
         <Sidebar />
         <div className='content' style={{display:'flex', flexDirection:'column', margin:'3%'}}>
            <p> Welcome to the Assignments Menu</p>
            <h1>this is the assignment section 1</h1>
         </div>



      </div>

   )
}
export default Assignments;