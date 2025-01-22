import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { flushSync } from 'react-dom';
function Assignments() {
   return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
         <Sidebar />
         <div className='content' style={{display:'flex', flexDirection:'column', margin:'1%'}}>
            
            
            <div className='radient' style={{display:'flex',flexDirection:'column'}}>
               <Link to={'/work'}>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{width:'1430px',height:'5vh',color:'white',textDecoration:"none"}}>
                <p style={{display:'flex',alignItems:'center'}}>Math Assignment</p>
            </div>
            </Link>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            <div className='shadow p-3 mb-5 bg-black rounded' style={{height:'5vh'}}></div>
            
         </div>
        </div>


      </div>

   )
}
export default Assignments;